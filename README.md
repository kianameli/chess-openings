# Project Overview

![alt text](https://i.imgflip.com/5l9yoz.jpg "sure, why not?")

## Project Name

Is this an opening?

## Project Description

Learning chess is hard. Learning chess openings is harder. This app is to help players input some opening moves and find out which opening, if any, those moves belong to. It's not especially helpful for beginners to memorize openings at first, but curiosity never hurt.

## API and Data Sample

The Lichess opening explorer API is free to use and doesn't require an auth key. By inputting a FEN ([Forsyth-Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation): describes a chess board position), the API will return a JSON that includes, among other things, the [ECO](https://en.wikipedia.org/wiki/Encyclopaedia_of_Chess_Openings) code and name of the opening if the position has one. For example,

```
{"white":36446,"draws":60733,"black":23262,"moves":[{"uci":"a7a6","san":"a6","white":26936,"draws":44584,"black":17189,"averageRating":2425},{"uci":"g8f6","san":"Nf6","white":5163,"draws":11713,"black":3499,"averageRating":2470},{"uci":"f7f5","san":"f5","white":1512,"draws":1500,"black":768,"averageRating":2379}
```

...`"averageRating":2429,`...

```
"opening":{"eco":"C60","name":"Ruy Lopez"},
```

...

```
"topGames":[{"id":"jYSkjcuG","winner":"draw","speed":"classical","white":{"name":"Carlsen, M.","rating":2882},"black":{"name":"Caruana, F.","rating":2818},"year":2019},{"id":"Sxov6E94","winner":"white","speed":"classical","white":{"name":"Caruana, F.","rating":2818},"black":{"name":"Carlsen, M.","rating":2882},"year":2019},{"id":"hFigNtet","winner":"draw","speed":"classical","white":{"name":"Caruana, F.","rating":2819},"black":{"name":"Carlsen, M.","rating":2875},"year":2019},{"id":"ezRQfr7f","winner":"black","speed":"classical","white":{"name":"Carlsen, M.","rating":2882},"black":{"name":"Ding Liren","rating":2805},"year":2019}]}
```

## Wireframes

![alt text](assets/wireframe-1.png "homepage")
![alt text](assets/wireframe-2.png "result page")

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Use chessboard on page to input moves and get FEN
- Button to ask if position is an opening
- Send FEN to Lichess opening API and return opening code and name
- Show opening or message that position is not in opening encyclopedia
- Allow user to reset board and check another opening

#### PostMVP

- Allow user to input following moves and compare against most commonly played next moves
- Offer 'quiz' that lists various openings for user to select which matches current position
- Display main openings/variations that "branch" from current position
- Keep history of moves so player can repeat play from original position

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day          | Deliverable                                        | Status     |
| ------------ | -------------------------------------------------- | ---------- |
| August 27-30 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| August 30    | Project Approval                                   | Incomplete |
| August 31    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| August 31    | Pseudocode / actual code                           | Incomplete |
| September 2  | Initial Clickable Model                            | Incomplete |
| September 2  | MVP                                                | Incomplete |
| September 3  | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component                                  | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Adding Form                                |    H     |      hrs       |     0hrs      |    0hrs     |
| HTML/CSS: initial layout                   |    H     |      3hrs      |     0hrs      |    0hrs     |
| HTML/CS: buttons/display                   |    H     |      3hrs      |     0hrs      |    0hrs     |
| Create board and getFEN                    |    H     |      3hrs      |     0hrs      |    0hrs     |
| Lichess API                                |    H     |      3hrs      |     2hrs      |    0hrs     |
| Display opening info                       |    H     |      2hrs      |     0hrs      |    0hrs     |
| Reset button                               |    H     |      3hrs      |     0hrs      |   3.5hrs    |
| More styling                               |    H     |      3hrs      |     0hrs      |    0hrs     |
| Enable "play" button for next moves        |    H     |      3hrs      |     0hrs      |    0hrs     |
| Save root position for retrying next moves |    H     |      3hrs      |     0hrs      |    0hrs     |
| Adding Form                                |    H     |      hrs       |     0hrs      |    0hrs     |
| Adding Form                                |    H     |      hrs       |     0hrs      |    0hrs     |
| Adding Form                                |    H     |      hrs       |     0hrs      |    0hrs     |
| Total                                      |    H     |     26hrs      |      hrs      |     hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
