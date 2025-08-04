# travel-bucket-list-project

## Introduction:
Travel Bucket List is a browser-based personal travel planning built where authenticated users can sign in to track countries, annotate them with season and notes, and build their dream trips by selecting a country and specifying transportation and accommodation preferences.


Use the app: https://travelbucketlist-l5tp.onrender.com/


## Contents:

• [Introduction](#introduction)   
• [Project Features](#project-features)  
• [Technologies Used](#technologies-used) 

• [Core Logic](#core-logic)  
• [Future Enhancements](#future-enhancements)  
• [Conclusion](#Conclusion) 


## Project Features:
• User authentication (sign up / sign in) with protected user-specific data. :contentReference[oaicite:0]{index=0}  
• Add country entries with season and freeform notes.  
• Dream Trip builder: select a country, choose transportation, and specify accommodation.   


## Technologies:
• MongoDB 

• NodeJs

• CSS3

• JavaScript ES6

![Uploading image.png…]()

## Core Logic:
• Authentication & Authorization  
Users authenticate via secure login . Tokens/secrets are kept out of source code and stored in environment variables; endpoints are protected with middleware to ensure only the owning user can access their entries.  

• Country Entry Management  
Each country entry is scoped to the user and includes metadata: country name, season, and notes. 

• Dream Trip Builder  
Dream trips link to a country entry and capture transportation and accommodation preferences. The data model allows users to evolve a simple wish list into structured trip plans.


## Future Enhancements:
 Suggested trips: pre-populated trip ideas based on popular destinations or past user behavior so users can pick and customize instead of starting from scratch.

## Conclusion
Travel Bucket List turns travel ideas into plans by combining suggested trips and user entries on a secure, scalable MEN stack.

