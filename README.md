# opera-singer-search


## Overview

_**find-a-singer** is an app that allows performers to Create, Read, Update, and Destroy roles from operas which they have previously performed. This will add to an ever expanding database of singers so smaller opera companies will be able to search for them by opera or by role._


<br>

## MVP


_The **find-a-singer** MVP will be a small prototype database of operas which new users can add their name to the list of roles performed. They will also have a landing screen after their name is clicked that will show all operas they have performed, an image, and a bio._

<br>

### Goals

- _Full CRUD for singers adding, showing, updating, and deleting their roles to the opera database_
- _Landing page with image, bio, and operas performed_
- _Searchable opera database by name, style (classical, baroque ect), or role._


<br>

### Libraries and Dependencies

> Use this section to list all supporting libraries and dependencies, and their role in the project. Below is an example - this needs to be replaced!

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | Front end functionality, Router, Axios,  |
|     Rails        | Backend functionality, bcrypt, jwt, rack-cors |


<br>

### Client (Front End)

#### Wireframes

[Desktop Landing Page](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600123024/Find-Singer-p4/Home_hsatab.png)

[Mobile Landing Page](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008228/Find-Singer-p4/Mobile-Home_zorf0d.png)

[login](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600123024/Find-Singer-p4/Register_ojg3ix.png)

[register](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600123024/Find-Singer-p4/Register_ojg3ix.png)

[Search by Opera ](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600123024/Find-Singer-p4/Home_hsatab.png)

[Search by Singer ](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600123024/Find-Singer-p4/SearchBySinger_e26y22.png)


[Desktop OperaDetail](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008327/Find-Singer-p4/Desktop-SearchByOpera_u7bb9b.png)

[Mobile OperaDetail](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008818/Find-Singer-p4/Mobile-search-by-opera_lavj29.png)


[Desktop Choose Role](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008417/Find-Singer-p4/Desktop-results-search_sbodrp.png)


[Mobile Choose Role](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008818/Find-Singer-p4/Mobile-Results-search_ub8jkd.png)


[Desktop SingerDetails](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008478/Find-Singer-p4/Desktop-Signer-landing-page_uhvxh5.png)


[Mobile SingerDetails](https://res.cloudinary.com/bobalobbadingdong/image/upload/v1600008818/Find-Singer-p4/Mobile-Singer-Page_q5oddg.png)


#### Component Tree

[Whimsical Component Tree](https://whimsical.com/EEXGGaAGbHiahtgGm7XUkf)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ Components/
      |__ Header
      |__ OperaCard
      |__ SingerCard
      |__ Footer
|__ Containers/
      |__ MainContainer
|__ layouts/
      |__ Layout.jsx
|__ screens/
      |__ Home.jsx
      |__ Login.jsx
      |__ OperaDetail.jsx
      |__ UserDetail.jsx
      |__ RoleCreateForm.jsx
      |__ RoleEditForm.jsx
|__ services/
      |__ auth.js
      |__ api-config.js
      |__ roles.js
      |__ operas.js
      |__ users.js

```

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                               |
| :----------: | :--------: | :---: | :---: | :-----------------------------------------------------------------------  |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._                        |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._                |
| Search Opera | functional |   n   |   y   | _Search by Opera name and result(s) will show in cards of IMG/description_|
| Search Signer| functional |   n   |   y   | _Search by singer shows cards for each singer that matches entry          |
| Singer Card  | functional |   n   |   y   | _The singer cards show singer name, voice type, and link to page          |
| Opera Card   | functional |   n   |   y   | _The Opera cards show Composer name, and Image                            |
| Singer Page  | functional |   n   |   y   | _Singer Page will show image, current city, roles, personal website link  |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._          |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Create Back End     |    H     |     4 hrs      |     TBD     |     TBD     |
| Create CRUD Actions in backend |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Front end structure |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Nav Bar     |    H     |     2 hrs      |     TBD     |     TBD     |
| Link Backend to Frontend  |    H     |     3 hrs      |     TBD     |     TBD     |
| Setup CRUD link from frontend to backend |    H     |     4 hrs      |     TBD     |     TBD     |
| User Auth      |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Home screen |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Opera Card |    H     |     2 hrs      |     TBD     |     TBD     |
| Create Singer Card |    H     |     2 hrs      |     TBD     |     TBD     |
| Create Search for Opera screen     |    H     |     2 hrs      |     TBD     |     TBD     |
| Implement search  |    H     |     3 hrs      |     TBD     |     TBD     |
| Create Singer screen     |    H     |     2 hrs      |     TBD     |     TBD     |
| Complete full MVP Design     |    H     |     3 hrs      |     TBD     |     TBD     |
| Complete full MVP Mobile     |    H     |     3 hrs      |     TBD     |     TBD     |
| Try post MVP if time allows    |    H     |     5 hrs      |     TBD     |     TBD     |

| TOTAL               |          |     47 hrs      |     TBD     |     TBD     |


<br>

### Server (Back End)

#### ERD Model

[ERD](https://app.diagrams.net/#G1eN6CczcySVY863nSTjA02ufLHkgE0mTT)
<br>

***

## Post-MVP

- _Another Column for the singers table that includes an image carousel for uploaded headshots and performance pictures_
- _Another table the singers can post, edit, delete recent roles performed in blog style card (image of performance and description) for their Singer page_
- _Links or iframes with actual recordings from the roles they have performed / learned_
- _Ability for singers to add a role or a while opera that isn't on the database._


***

## Code Showcase

> TBD

## Code Issues & Resolutions

> TBD
