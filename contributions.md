  # Contributions

Every member has to complete at least 2 meaningful tasks per week, where a
single development task should have a granularity of 0.5-1 day. The completed
tasks have to be shown in the weekly TA meetings. You have one "Joker" to miss
one weekly TA meeting and another "Joker" to once skip continuous progress over
the remaining weeks of the course. Please note that you cannot make up for
"missed" continuous progress, but you can "work ahead" by completing twice the
amount of work in one week to skip progress on a subsequent week without using
your "Joker". Please communicate your planning **ahead of time**.

Note: If a team member fails to show continuous progress after using their
Joker, they will individually fail the overall course (unless there is a valid
reason).

**You MUST**:

- Have two meaningful contributions per week.

**You CAN**:

- Have more than one commit per contribution.
- Have more than two contributions per week.
- Link issues to contributions descriptions for better traceability.

**You CANNOT**:

- Link the same commit more than once.
- Use a commit authored by another GitHub user.

---

## Contributions Week 6 - 24.03 to 30.03
| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **johndonneUZH** | 26.03.2025  | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/b16a521859c40ec5c4b8c2b97404f64902fe27de |  | Implemented JWT authentication and improved endpoint security |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/43e99d45f8e6456f1b329d4dd851eb45cdc0c9db | Fixed some issues with token expiration |  |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/b3c30b4a524cb34b0e25999f68981ef3f82a1df9 |  Implemented GET users/{usersId} |  |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/7a364dad653265a92492c126fb3ad0cefc1c0704| Added PUT to /users/{userId} this way updates are allowed. Added a new endpoint /logout which main functionality is to set the user to OFFLINE in the DB | |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/88eacc5a90e516afba6f2b2828859463ba750e4e | Refactoring and starting with Project entity |  |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/056963ab4295db0420bcc2133aefc8c25081775b | Starting to work on project logic, created project table and connected to the DB |  |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/3f6929bbd2c2c1d85ca79ccf77a9459bb5689f57| Implemented project creation and retrieval, still need to do PUT method |  |
|                    | 27.03.2025  | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/2d82f4d91347e7b3cb6b372256374a59fbc378a2 | | Finished with original REST API specs, moving to additional entities <Comment> and <Change> |
|                    |    | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/b1c936127e6301d8df58c4b31cbb6da6bf4aee70 | added PUT /projects/{projectId} which allows you to modify the project settings and add/remove people |  |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/a6d2633fe23896840817bf7a5f37365e881ba90c | Implemented IdeaController and managed to create an Idea in the DB, still more to do | |
|                    |    | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/ffd02fe1950a0cec8121711d9f51aa38a966f159 | Implemented subIdeas creation, Modification of ideas, Get spefic ideas by ProjectId |  |
| **fabiotilor** | 26.03.2025   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/1/commits/d948302b57c0dbb434b198c2efa84da401edf97f | Added the Login and Registering page | Hard to use website without it, huh? |
|                    | 27.03.2025   |https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/5/commits/94993cd485b7982705ddc350962dfe5955afdc63 | Additional styling | To increase shareholder value |
| **manueltuor** | 22.03.2025   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/3755dcb25d3b291b9203448eeb77dab3db32e0c1 | Set up the frontend frameworks (tailwind, shadcn, magicui) | Relevant because we will stick to those for the rest of the project |
|                    | 27.03.25   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/4408a87c29e080b6f810214359bc03c2420f64ed | added the landing page | first page that you see when going onto the webapp |
| **JMAVITE** | [25.03.2025]   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/9c6744fd800337a1b5b58520d7e778308036c9fc | Structure to the project | It is the structure of the pages |
|                    | 28.03.2025   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/a505ee26c4b9d7c529f8608b9e8d28ab98fc956e | It is almost the whole dashboard | It is most of user stories |
| **RonaldDomi** | [27.03.2025]  | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/c5c74a36d54696d1d3ada6094d2b8dd43e43ee82 | Create the basic structure of the unit testing | Tests are always important |
|                    |        | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/c58cb335112dad90c4af57bfe4a6f29ad295ed2b | Update the tests for the Idea module | Updating tests |

---

## Contributions Week 7 - 28.03 to 04.04

| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **fabiotilor** | 03.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/90e626e52a6c0b6249749382aa30eb032a55f1cc| Reworked the UI for the Projects Page with creation and deletion | Critical User Story to manage Projects |
|                    | 03.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/1e95a1cab66b311d587d1debde60827eecb7fd19| Created the links between pages and user friendliness (e.g. confirm deletion) | To get the sidebar dashboard to the projects page |
| **manueltuor** | 29.03 | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/8b7f86575ff8e7f5afec451f18fe80213eacbdda | finished the landing page for the app | first page you see on when visiting |
|                    | 03.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/32f16a533068d6d18dd158c5c7f04e2a8decfb5b | added profile page UI and sidebar | sidebar will be main means of navigation, relevant for most user stories, profile page will be used to edit users |
| **johndonneUZH** | 02.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/c0c0966a904c0dd7f084aac0908f1da072216f14 | Added changes endpoint | Completing REST endpoints config |
|                    |   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/422fc3e390e210bddfa227626ef86150990d879d | Starting setting up comments | Completing REST endpoints config |
|                    | 03.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/4598981b06cb5129cd70af93d628b3e7b6e56d2b | Implement createComment endpoint and update CommentRegister model | Completing REST endpoints config |
|                    |    | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/f24e8c7c037987285539eba67e58d922ffa96407 | Add support for nested comments and update Comment model | Completing REST endpoints config |
| **RonaldDomi**     | 03.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/afe19ebc8fdcef70f53d922d83ee6edb85c171de | Adding more tests for all the modules | Tests are always good to have |
|                    | 02.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/9880f3406f66167e97626c0896106db30ba93f8c | Setting up the configuration for web socket use in the future | Critical to have real time interaction |
|                    | 02.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/f4fd81449070fa82cf1ebfa8271f319cfcedc699 | Setting up the configuration for web sockets on the client | Critical for real time interaction | 
| **JMAVITE** | 29.03   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/e1e51251e8eed5ae0ba6624ef167683afbf89c89 | Beutiful boxes and it is interactive | Makes them look closer to the mockups |
|                    | 03.04| https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/e2bfb7c770cd540266cb8218de6abd46959f8bb4 | Gives strucutre to the current file | avoids having a 500 lines file, instead we have multiples more specific |


---

## Contributions Week 8 - 06.04 to 11.04

| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **fabiotilor** | 10.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/34/commits/f10d4b85c039a868fc3d483ff95dda482a69b2c2| Fixed a bug and fixed the delete projects confirmation | User was stuck in a weird state where he could not delete projects anymore |
|                    | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/7b05d5e7ddca2e3d1db71d348728d00eccbbf18f |       Made it more intuitive for the User how the projects are accessible | It was not clear in the demo |
|                     | 10.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/37/commits/a10705030ff2d13d361a4bac8452c1fa4e4e9a6e | Added the forgot password page | The user should not lose their account just because they're forgetful |
|  **johndonneUZH**  | 04.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/ebbbb315863d579de12bce8e7f4eab26b4c33873 | Integrated with backend, login and register | Integration |
|                    | 05.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/4f0772466c3c42741162c42be12b88fc7adddd41 | Working on integreation, fetching user data | Integration |
|                    | 08.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/b9325eb7fd410aec9882213e19985dd8eb0b0e35 |Integrated projet page, connected with backend for project creation, fetch and deletion | Integration |
|                    |  08.04 | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/0baceb4e173e558d4e62a1d06a274cf13b451722 | Add project deletion and user project retrieval functionality | Integration |
|                    | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/3c001ae17a8b1de98eaaf21a2656cf3c58a9f761 | Add endpoint to retrieve user friends in UserController and implement logic in UserService | Integration |
|                    | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/042029feabc94a7e6d920eabcdce719eac95c2ac | Refactor sidebar components and integrate API calls for user and project data | Integration |
|                    |  10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/db42cb86a900b16ff856b02d86929976af8bf37b | Enhance sidebar functionality: integrate project management hooks, improve data fetching, and refine navigation logic | Integration |
|                    | 10.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/20f7e832c4b10a2ada23c25e1655d8e5803add24 | Refactor sidebar and projects table components: extract icon mappings, improve project fetching logic, and enhance error handling | Integration |
|                    | 10.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/925baa5b578625e3c7c466bb920ae6a2e334ce26| Implement friends fetching functionality in FriendsTable component: add API call to retrieve friends and handle loading and error states | Integration |
| **JMAVITE** | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/14d6fd1534cc43d2335e472fcb144089d5124667 | INTEGARION BACK AND FRONT END | it makes the app work and saves the data in the data base |
|                    | 9.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/1a5bc4804ff841fdbae055fbbeb32f010376129e | Integration of the ideas | saves the ideas in a database and can retrieve its values from it |
| **manueltuor** | 9.04   | (https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/8ed95b727697cd954f856b9a4e8baf5343a1620d) | finished sidebar, added new menu and enhanced the team switcher with a search bar | relevant to most user stories |
|                    | 9.04 | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/eb871c0cede074a5c4d08333524b6eba185e93c0 | setup the template for all pages we need and started designing some + integrated with others designs | relevant to most user stories |
| **Ronald Domi** | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/54121dbe9f08f8de072987c69dff8e736eb52689 | Adding AI integration | AI suggestions and brainstorming is a very core part of the service |
|                 | 10.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/54121dbe9f08f8de072987c69dff8e736eb52689 | Adding AI tests | Testing the AI added parts with unit tests |

---
---

## Contributions Week 9 - 11.04 to 18.04

| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **fabiotilor** | 15.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/60/commits/62c621a2ac072c34f33dfb8a77717f8da2340ad8 | Added UI to add friends | Friends are added to projects |
|                    | 17.04 | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/65/commits/b2105b419534d0ebc1e63a93207e5b115170a2cd | Finished setup of otp | User does not lose account when being forgetful |
| **JMAVITE** | 14.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/d162cda4bf7e0b5a11de23a5dc042c71bb7e7857 | try to fix a bug with sessionstorage | Gives a more userfriendly experience with less bugs |
|                    | 11.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/f3c9e29263ba6634ce153f4992cd17c3b3b52a4e | use of websockets | Gives to the user an interactive interface for project organization |
| **johndonneUZH** |  13.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/f6366c50383829cfb04e34fc5f4167587f6475b9 | Add analytics tracking for project, idea, and comment changes | Analytics |
|                    | 13.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/263e2a21d20ff60e181bd389ff6c1acb954170af | Add daily contributions fetching and charting functionality | Analytics |
|                    |  17.04  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/e20d5794e8b72b38f18e6aaf22cb628ace9f3c9a | Add leave project functionality with confirmation dialog | Integration |
|                    | 17.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/fd66670baa7509288b922b62244ca49e8b72532e | Add functionality to add friends to a project and update related components | Integration |
|                    | 17.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/968a14b8248e8d19aa3ca25c2856dcdd794636cf | Add functionality to remove friends from a project and update related components | Integration |
|                    | 17.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/f1f9609a2b60ea3bacf5206742aaf5e91ce3940d | Add user profile update functionality and improve user data fetching  | Integration |
|                    | 17.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/b1225f4a5720260d868ac1b4c99713c73b680007 | Add project creation functionality with friend selection and dialog| Integration |
| **manueltuor** | 14.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/128ab9f4a23433885db13efae6667b91a347979f | moved create project into project switcher for better UI | improved user experience |
|                    | 15.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/6894baea298250099d795ee9485f8885a46b2ae8 | Created settings page UI and corresponding dialogs | enables users to manage their projects |
|                    | 16.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/63ac1018d3c5edd5ee603d291cf25c7a832b1763 | Created dialog for edit profile | users should be able to edit their profiles |
| **RonaldDomi** | 18.04   |https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/b7c4cdc205570b0d10f1005add373bee45232756 | UI button example for LLM calls | Adding AI usa case example |
|                    | 14.04   |  https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/01f3318aa1e057c1a3bd997027c7b8143162bdea | Fully functional AI controller endpoints | users should be able to interact with LLM |

---

## Contributions Week 11 - 18.04 to 2.05

| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **fabiotilor** | 30.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/96/commits/c10da95a2793cc09727cb682a089183cfcf7a55f | Cleaning up the friends page and adding deleting friends | Friends are used to add to projects. |
|                    | 01.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/c10da95a2793cc09727cb682a089183cfcf7a55f | Reworking UI and flow of one-time-password | To reduce number of pages |
| **manueltuor** | 20.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/fa91683ecccca5685d44dc02ff0b8a003c04fae6 | Created the UI for the changelog table | to keep track of dashboard changes |
|                    | 20.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/0c0f6ef3d3a13271d9d93d0a35ac7f4e9c941deb | setup all changelog charts | to distinguish between types of contributions |
| **johndonneUZH** | 03.05  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/df9b8343835893a37b8776119366f1dc59f44b4a | Update README.md | Deliverables |
|                    | 01.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/b031b04215bb627300a851b814ec028e51753d5b | Refactor UserService constructor to include UserRepository; update related tests for improved dependency injection and functionality | Bug fixes |
| **JMAVITE** | 21.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/6545f2561f892c6a2a246525d4569c172d3bb4fe | trying to set websockets correctly | Makes users experience interactive|
|                    | 22.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/41992c33ee29eccf9952e3f514b0db68a94355ef | right configuration of the app.yanl | Makes sure websockets are working |
| **RonaldDomi** | 01.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/11c1495a3a5680c9846ccf4b7d771e078898bb1f | SonarQube improvements | Make the code to standard |
|                    | 01.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-server/commit/3abce8219293e244fd004c922b7262c10741b95c | 68.5% test coverage | Sonarqube stuff |
---
---

## Contributions Week 12 - 2.05 to 9.05

| **Student**        | **Date** | **Link to Commit** | **Description**                 | **Relevance**                       |
| ------------------ | -------- | ------------------ | ------------------------------- | ----------------------------------- |
| **fabiotilor** | 5.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/pull/102/commits/3cd5a4d5bf70e4930cf86867ea7b5bf56a967861 | Cleaning the friends page| Components were all over the place and gave the users a headache |
|                    |9.05  | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/1449e9202f551a42658b979b371bbf97598fbad3 | More uniform look and better user-experience when editing profile | Everything should work smoothly for M4 submission |
| **manueltuor** | 24.4   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/f2b4ce7beaa8b2f55b4c231304a63c6e6d617e48 | refined the dashboard UI | to make the whole application look more uniform |
|                    | 9.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/e8849af1ad2c18e27d2f60bcbb3bc2a082421ef6 | code cleanup | deleted unnecessary modules and files |
| **JMAVITE** | 28.04   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/109cd373838b18dc5b10bd90aff6ba4c8fba30ab |integrates A1 succesfully | Makes sure the client connects to the server and developed ai ideas|
|                    | 09.05   | docs.google.com/document/d/1uk6OiK6fO_M5kl8vVFA1XYOjwtjFn9PhEuA7sYy9TOY/edit?usp=drive_web&ouid=102512583481830901419 | I did the started the final report | It is a key element of the end of the development |
| **johndonneUZH** | 08.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/2266368783c1714638a0c7db0458194718717618 | refactor: enhance WebSocket integration and improve user request handling | Bug fixes |
|                    | 09.05   | https://github.com/johndonneUZH/sopra-fs25-group-46-client/commit/dd5b83c9d50e60bcc8325aeda933d3bf9b0abdbc | Update README.md | Deliverables |

---
