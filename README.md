# Project Overview

## Project Name

Is this an opening?
![alt text](https://imgflip.com/i/5l9yoz "sure, why not?")

## Project Description

Learning chess is hard. Learning chess openings is harder. This app is to help players input some opening moves and find out which opening, if any, those moves belong to. It's not especially helpful for beginners to memorize openings at first, but curiosity never hurt.

## API and Data Sample

The Lichess opening explorer API is free to use and doesn't require an auth key. By inputting a FEN ([Forsyth-Edwards Notation](https://en.wikipedia.org/wiki/Forsyth%E2%80%93Edwards_Notation): describes a chess board position), the API will return a JSON that includes, among other things, the [ECO](https://en.wikipedia.org/wiki/Encyclopaedia_of_Chess_Openings) code and name of the opening if the position has one. For example,
`{"white":36446,"draws":60733,"black":23262,"moves":[{"uci":"a7a6","san":"a6","white":26936,"draws":44584,"black":17189,"averageRating":2425},{"uci":"g8f6","san":"Nf6","white":5163,"draws":11713,"black":3499,"averageRating":2470},{"uci":"f7f5","san":"f5","white":1512,"draws":1500,"black":768,"averageRating":2379}`...
`"averageRating":2429,`
...
`"opening":{"eco":"C60","name":"Ruy Lopez"},`
...
`"topGames":[{"id":"jYSkjcuG","winner":"draw","speed":"classical","white":{"name":"Carlsen, M.","rating":2882},"black":{"name":"Caruana, F.","rating":2818},"year":2019},{"id":"Sxov6E94","winner":"white","speed":"classical","white":{"name":"Caruana, F.","rating":2818},"black":{"name":"Carlsen, M.","rating":2882},"year":2019},{"id":"hFigNtet","winner":"draw","speed":"classical","white":{"name":"Caruana, F.","rating":2819},"black":{"name":"Carlsen, M.","rating":2875},"year":2019},{"id":"ezRQfr7f","winner":"black","speed":"classical","white":{"name":"Carlsen, M.","rating":2882},"black":{"name":"Ding Liren","rating":2805},"year":2019}]}`

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

_These are examples only. Replace with your own MVP features._

- Find and use external api
- Render data on page
- Allow user to choose favorites

#### PostMVP

_These are examples only. Replace with your own Post-MVP features._

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day        | Deliverable                                        | Status     |
| ---------- | -------------------------------------------------- | ---------- |
| July 10-12 | Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete |
| July 13    | Project Approval                                   | Incomplete |
| July 13    | Core Application Structure (HTML, CSS, etc.)       | Incomplete |
| July 14    | Pseudocode / actual code                           | Incomplete |
| July 15    | Initial Clickable Model                            | Incomplete |
| July 16    | MVP                                                | Incomplete |
| July 17    | Presentations                                      | Incomplete |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix. Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component        | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------- | :------: | :------------: | :-----------: | :---------: |
| Adding Form      |    H     |      3hrs      |    3.5hrs     |   3.5hrs    |
| Working with API |    H     |      3hrs      |    2.5hrs     |   2.5hrs    |
| Total            |    H     |      6hrs      |     5hrs      |    5hrs     |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
