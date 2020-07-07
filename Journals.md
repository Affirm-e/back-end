# Journal Day 1 (Monday, July 5th)
1. What did we do? 
    - we created a pagination function that allowed us to grab all of the quotes from every page under the particular keyword we were looking for 
    - we wrote a series of functions that allowed us to combine quotes after being able to .get an array of quotes from each page 
    - we successfully seeded our data and were able to view in Compass 
    - figured out how to consolidate all the arrays that were returning from our quotes per page function
2. Why was it easy, hard, interesting? 
    - Easy: 
        - seeding the database felt approachable since we have done it multiple times before 
        - for loop flash back
        - scraping data according to classes in the inspect tools felt easy to read and follow even though we couldn't understand how to isolate the elements that we wanted 
    - Medium:
        - familiar with some pagination logic from past projects, but had to learn how to write a pagination function using cheerio 
    - Hard: 
        - Figuring out how to get the maximimum amount of pages by getting the second child html element 
    - Interesting: 
        - How certain functions and methods work and some don't (bc Cheerio sucks)
        - How many async/await functions need to be used in this project for it to work 
