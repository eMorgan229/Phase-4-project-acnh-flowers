# User Stories
![page mock up](/images/Screen%20Shot%202022-07-08%20at%203.36.43%20PM.png "mockup")

MVP: As a user, I can:

  -Log onto the site
  -View a list of all of the ACNH flowers (READ)
  -Add a comment to the flower card (CREATE)
  -edit the comment (UPDATE)
  -delete a comment (DELETE)
  
  Stretch Goals: As a user I can:

  -Click on two flower cards and the child flower (the product of their cross-pollination) will appear in the display div
  -I can check a box that adds a flower to "my garden" route that will persist and be attached to my username
  -I can add notes to each flower card in "My Garden" route
  -delete a flower from "My Garden" route
  # ERD (Entity Relationship Diagram)
    User -< Review >- Flower (Many to Many)
    User -< Flower (One to Many)

  # Routes
  1. HOME (All flowers will be rendered here and the stretch goal of the display pane (when a user clicks on a flower) will live here as well)
  2. GARDENER'S GUIDE (information about ACNH gardening and how to get started will live here)
  3. MORE INFO/ MY GARDEN (This will either be more information on ACNH gardening like links to external resources or this route will be "My Garden" which will house the Stretch goal of allowing the user to add flowers to their "garden", add notes to the cards, and delete flowers)

