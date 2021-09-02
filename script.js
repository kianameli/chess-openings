const game = new Chess();
// console.log(game);
const BASE_URL_OPENING = "https://explorer.lichess.ovh/master?fen=";
let $status = $("#status");
let $fen = $("#fen");
let $pgn = $("#pgn");

//functions: onDragStart, onDrop, onSnapEnd, and updateStatus are directly from chess.js documentation examples
function onDragStart(source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) return false;

  // only pick up pieces for the side to move
  if (
    (game.turn() === "w" && piece.search(/^b/) !== -1) ||
    (game.turn() === "b" && piece.search(/^w/) !== -1)
  ) {
    return false;
  }
}

function onDrop(source, target) {
  // see if the move is legal
  let move = game.move({
    from: source,
    to: target,
    promotion: "q", // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return "snapback";

  updateStatus();
}

// update the board position after the piece snap
// for castling, en passant, pawn promotion
function onSnapEnd() {
  board.position(game.fen());
}

function updateStatus() {
  let status = "";
  let moveColor = "White";

  let bgColor = "white";
  let textColor = "black";

  if (game.turn() === "b") {
    moveColor = "Black";
    bgColor = "black";
    textColor = "white";
  }

  // checkmate?
  if (game.in_checkmate()) {
    status = "Game over, " + moveColor + " is in checkmate.";
  }

  // draw?
  else if (game.in_draw()) {
    status = "Game over, drawn position";
  }

  // game still on
  else {
    status = moveColor + " to move";

    // check?
    if (game.in_check()) {
      status += ", " + moveColor + " is in check";
    }
  }

  $status.html(status);
  $fen.html(game.fen());
  $pgn.html(game.pgn());

  // let statusObj = document.querySelector("#status");
  // statusObj.setAttribute("background-color",)
  $status.css("background-color", bgColor);
  $status.css("color", textColor);
}

function handleNextMoveClick(evt) {
  //console.log(evt.target.innerHTML);
  let movePGN = evt.target.innerHTML.split(".");
  let moveTemp = movePGN[movePGN.length - 1].split(" ");
  let move = moveTemp[moveTemp.length - 1];
  game.move(move);
  board.position(game.fen());
  updateStatus();
  resetOpeningInfo(false);
  handleIsOpeningClick();
  //  game.move(evt.target.innerHTML);
}

function updateNextMoves(nextMoves) {
  //reset #next-moves-list
  let nextMovesList = document.querySelector("#next-moves-list");
  nextMovesList.innerHTML = "";
  //get prefix for pgn nexthalfmove notation
  let moveNum = game.fen().split(" ").pop();
  let nextMovePrefix = `${moveNum}.${game.turn() === "w" ? " " : ".."}`;
  //populate #next-moves-list
  nextMoves.forEach((nextMove) => {
    let newLi = document.createElement("li");
    let newLiSAN = document.createElement("p");
    newLiSAN.id = "san";
    newLiSAN.innerHTML = nextMove.san;
    newLi.appendChild(newLiSAN);
    newLi.innerHTML = `${nextMovePrefix}${nextMove.san}`;
    newLi.addEventListener("click", handleNextMoveClick);
    newLi.style.cursor = "pointer";
    nextMovesList.appendChild(newLi);
  });
}

function updateTextElementById(elementId, data) {
  let element = document.querySelector(`#${elementId}`);
  element.innerHTML = data;
}

function resetOpeningInfo(clearLast = true) {
  let nextMovesList = document.querySelector("#next-moves-list");
  nextMovesList.innerHTML = "";
  if (clearLast) {
    updateTextElementById(
      "opening-msg",
      "Play some moves to see if they're an opening"
    );
    updateTextElementById("opening-win-info", "");
  }
}

function getOpeningWinInfo(data) {
  let whiteWins = data.white,
    draws = data.draws,
    blackWins = data.black;
  let total = whiteWins + draws + blackWins;
  let whitePct = Math.floor(100 * (whiteWins / total)),
    drawsPct = Math.floor(100 * (draws / total)),
    blackPct = Math.floor(100 * (blackWins / total));
  let winInfo =
    game.turn() === "w"
      ? `Black: ${blackPct}%,  Draw: ${drawsPct}%,  White: ${whitePct}%`
      : `White: ${whitePct}%,  Draw: ${drawsPct}%,  Black: ${blackPct}%`;
  return winInfo;
}

function updateOpeningInfo(data) {
  if (data.opening) {
    updateTextElementById(
      "opening-msg",
      `${data.opening.eco}: ${data.opening.name}`
    );
    updateTextElementById("opening-win-info", getOpeningWinInfo(data));
  } else if (!document.querySelector("#opening-msg").innerHTML) {
    updateTextElementById("opening-msg", "This isn't an opening!");
  }
  if (data.moves) {
    updateNextMoves(data.moves);
  }
}

async function handleIsOpeningClick() {
  const fen = game.fen();
  const encodedFEN = encodeURI(fen);
  // console.log(fen);
  try {
    let res = await axios.get(`${BASE_URL_OPENING}${encodedFEN}`);
    //console.log(res.data);
    let data = res.data;
    updateOpeningInfo(data);
    if (data.opening) {
    } else {
      //console.log("This is not an ECO opening");
    }
    //nextMoves = data.moves;
    //updateNextMoves(nextMoves);
    // console.log(nextMoves);
  } catch (error) {
    console.log(error);
  }
}

function handleResetClick() {
  game.reset();
  board.position("start");
  updateStatus();
  //clear opening info too
  resetOpeningInfo();
}

function handleGetFENClick(evt) {
  let fenText = document.querySelector("#fen");
  if (fenText.style.display === "none") {
    fenText.style.display = "block";
    updateTextElementById("fen", game.fen());
    updateTextElementById("get-fen-button", "Hide FEN");
  } else {
    fenText.style.display = "none";
    updateTextElementById("get-fen-button", "Show FEN");
  }
  evt.target;
  // updateTextElementById("fen", game.fen());
}

function handleRuyLopezClick() {
  const ruyLopezFEN =
    "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3";
  const ruyLopezPGN = "1. e4 e5 2. Nf3 Nc6 3. Bb5";
  game.reset();
  board.position(ruyLopezFEN);
  game.load_pgn(ruyLopezPGN);
  updateStatus();
  resetOpeningInfo();
  //document.querySelector("#pgn").innerHTML = ruyLopezPGN;
  $pgn.html(ruyLopezPGN);
}

let config = {
  draggable: true,
  position: "start",
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd,
};

let board = Chessboard("board", config);
updateStatus();

let isOpeningBtn = document.querySelector("#is-opening-button");
isOpeningBtn.addEventListener("click", handleIsOpeningClick);

let resetBtn = document.querySelector("#reset-button");
resetBtn.addEventListener("click", handleResetClick);

let ruyLopezBtn = document.querySelector("#ruy-lopez-button");
ruyLopezBtn.addEventListener("click", handleRuyLopezClick);

let getFENBtn = document.querySelector("#get-fen-button");
getFENBtn.addEventListener("click", handleGetFENClick);

let nextMoves = [];
let openingName = "";
