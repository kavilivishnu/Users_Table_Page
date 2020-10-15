This project is created with (https://github.com/facebook/create-react-app).

The Main Page that is visible to the user as soon as he visits the webpage is, the "User Table Search page". Which is form the component "Search.js" file.

In the Main page, user can search for the people by typing a certain person's FirstName or LastName in the input box provided right below the heading tag(Users) in the MainPage.

The Links which are in "blue color" provided under the heading "Web" column in the user table are clickable and will direct you to a certain website when clicked.

The user can display all the information about each and every person in the given data by clicking on any of the  main headings
(Example: first_name, last_name, company_name etc.. ) in the "heading row" of the table. 

On click of any of the "main headings", the user will be directed to a new page that is "Details Page", from component "Details.js" which will be having every person's data will be stacked up together. Each data of an idividual person will be seperated with space from the upcoming individual's data. This will help the user to get set of information that is bundled together about a certain person and also will help the user with better readability and understanding.

Rendering the entire data in one page is not a good idea, won't look good and will make the user tired of going through or scrolling through the entire page. To prevent this problem, we are implementing "Pagination". Which will enable the user to navigate through all the pages by clicking on any of the numbers that are flexed in the pagination bar. Every page will be having it's own finite data which will make things more easier to the user to go through the entire data that is available.

The Pagination bar will be found in the bottom part of the Main page.

The pagination component is from the "Pagination.js" component.
