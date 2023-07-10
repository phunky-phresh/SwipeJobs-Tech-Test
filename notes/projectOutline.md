## Intro

You are tasked to create a page that displays jobs that were matched for users in a job matching site.
Please feel free to use any framework. The page should look something similar to the image below and
include appropriate actions where applicable.

When creating the page, as well as thinking about making the implementation fast and simple, also
consider the following:
modularity

- testability
- responsive design
- use of open source libraries and frameworks
- coding practices, structuring and readability

## API

You are tasked to create a page that displays jobs that were matched for users in a job matching site.
Please feel free to use any framework. The page should look something similar to the image below and
include appropriate actions where applicable.
When creating the page, as well as thinking about making the implementation fast and simple, also
consider the following:

- modularity
- testability
- responsive design
- use of open source libraries and frameworks
- coding practices, structuring and readability

## Screen shot breakdown

There are some key elements to consider when first looking at the provided screenshot:

- Icons
  - There are a number of icons that would be best handled with a simple icon package
- Dates
  - The job payload contains a range of dates and times. These need to be correctly formatted for correct time zone and date time format
- Distance
  - The distance is represented in miles
- Currency
  - Per hour rate is stored in cents and will need to be converted to a dollar figure. one currency
- Job site address
  - There is a job site address. The screenshot suggests that this section is clickable. It would be good to convert the address into a query that can load into google maps
- Mobile number formats

### Job Detail Sections

#### Page Header

The page header incudes the swipejobs logo on the far left and the name of the User to the far right. The User's name could be clickable and navigate to the account info.

#### Detail Header

The Details Header includes the display image, job title and the distance + hourly rate.

#### Detail Rows

The detail rows sit below the page header and include the following elements:

- An icon positioned to the far ledt of the row
- A row header, accompanied by details.
- The location row also has a chevron icon to the far right of the row, indicating a click action.

#### Actions

There are two actions which sit at the bottom of the details screen:

- Accept the job, "I'll Take it"
- Reject the job, "No Thanks"
