# eccoo Frontend Dev Test

![](./public/journey.jpg)

We've created a simple UI app to help us understand the way you think and approach technical problems. Please attempt all tasks, but don't worry if you don't finish everything. We've included rough guidance on the length of time to spend on each task. You may find that you complete the tasks sooner or that you need some extra time. We won't take the time taken into account when assessing your answers.

## Tasks

1. Some of the pages don't work as specified in the tests. Find and resolve these defects.  
 _As a guide, don't spend more than 1 hour on this._
2. The UX designer has provided a [page layout for the frontend form](./design/eccoo%20dev%20test%20screen%20layout.pdf). Code this design as faithfully as possible.  
 _Don't spend more than a couple of hours._
3. Make any extra changes you feel will enhance the site or codebase.  
 _Upper limit of 1 hour._

Please submit your responses via an updated git repository.

We've given an outline of the app technical design below.

## Technology

The app uses the following technology

* A [NestJS](https://nestjs.com/) web server
* Views rendered using [Nunjucks](https://mozilla.github.io/nunjucks/) templates
* A [Jest](https://jestjs.io/) test suite

The code is [TypeScript](https://www.typescriptlang.org/), although we're not using this extensively yet. You can more or less think of this as Javascript/Node.

The site comprises three pages. The routes are methods of the AppController class in [app.controller.ts](./src/app.controller.ts):

* **Home** - a page that presents a welcome message
* **Frontend** - a simple form which accepts and presents data
* **Backend** - a page which presents some 

You can start the server by running the `npm start` script, once you've installed the dependencies.
You can run the test suite with the command `npm test`.
