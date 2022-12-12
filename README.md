# Yoga-Class-Form
I used MERN stack to build this project and used the bootstrap to implement the styling. 
I try to give the focus on the custom style more and just used the bootstrap to make development faster.

# Flow of Project
1) At first user on the home page from where user can go either on form page or see the list of users who filled the form.
2) On the Form page user fill the necessary details of the it self like name, email(main thing so we can track identity), DOB, enroll date and slots.
3) Here we implemented the validations so only good data should go to server like user name must be there, DOB used to derive age and age should be in range.
4) After filling the form user navigated to the preview page so user can check details filled and pay the fees
5) after compeleting all above steps user data is added to database and marked fees paid

Notes:
For good user expereince if user filled the form and failed to process or closed the tab, we save details to the localstorage and 
when user again try to fill we retrive it.
For condtion of user can only register once in month we check for user exists and have previouly registered or not

# Implementations Details
## Backend Details
As mentioned backend uses the node and express. In backend there are few main end points api's like
1) Form Submit used to store the Customer data, marked the fees paid field false 
2) Here we check is if we previosly registered this customer or not if yes then we redirect user to the preview/pay page
3) and if we already have fees paid then we just send warning as user already registered
4) Payment API just marks fees paid field true
5) CompletePayment() I make that funciton as the promise and make behavoir as resolved every time
6) We valid user data three times at front end before making api call,at backend before saving data, in mongodb validations

## Frontend Details
1) React, bootstrap and pure css is used to create frontend
2) toastify used to make warnings and snackbars.
3) Front end design is simple and to the point

## ER Diagram 
![ER-Diagram](https://user-images.githubusercontent.com/69728524/207127425-119a715f-130b-498b-9f48-8906375986a2.jpg)

# Technology Used:
React, MongoDB, Node, Express, Moment, Bootstrap, axios, render(hosting)

# Future Work:
1) We can try to integrate the redux support for the project to manage the global state so API calls can be minimized.
2) UI can be improved significantly due to time constrained I am unable to do this.
3) We can break code into much smaller components and try to make it more reusable.
4) Adding more features such as user profile and authentication so user can easily track their own registrations
