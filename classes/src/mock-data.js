let mock = [{
    id: 1,
    name: "Graphic Design",
    instructor: "Kathy Grimwald",
    description: "In this course you'll be learning design principles such as color, balance, heirarchy, depth, symbolism, and more.",
    time: "8:00am - 10:00am MWF",
    duration: "4 weeks",
    price: "$40",
    image: ""
  },
  {
    id: 2,
    name: "Photoshop 101",
    instructor: "Kathy Grimwald",
    description: "ALL the basics of Adobe Photoshop, and then some!",
    time: "11:00am - 12:00pm MWF",
    duration: "3 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 3,
    name: "Healthy Cooking",
    instructor: "Judith Lavely",
    description: "I'll be teaching you how to cook delicious and healthy meals without breaking the bank. Send me an email if you're a college student and you'll get a discount!",
    time: "8:00am - 10:00am MWF",
    duration: "4 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 4,
    name: "Yoga and Aerobics",
    instructor: "Cassidy Ashton",
    description: "This is an intermediate course for flexibility and strength training. Get ready to learn how to breathe the right way during aerobic exercise.",
    time: "7:00pm - 8:30pm MTWTh",
    duration: "12 weeks",
    price: "$30",
    image: ""
  },
  {
    id: 5,
    name: "Interior Decorating",
    instructor: "David Jorgensen",
    description: "Interior design principles you can actually apply in your own home. Join my class to find out what all of the latest trends and ideas are and how to make your home as beautiful as the catalogs.",
    time: "4:00pm - 5:00pm TTh",
    duration: "2 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 6,
    name: "Sewing for Beginners",
    instructor: "Kathy Grimwald",
    description: "This class is for beginners, no previous experience necessary. We will provide each student with a few different fabrics and threads for a project we will work on throughout the course.",
    time: "8:00am - 10:00am MWF",
    duration: "5 weeks",
    price: "$50",
    image: ""
  },
  {
    id: 7,
    name: "Tae Kwon Do with Terry",
    instructor: "Terry Ridler",
    description: "Learn Tae Kwon Do from the comfort of your own home! You'll be kicking butt in NO time.",
    time: "7:00am - 8:30am MTW",
    duration: "8 weeks",
    price: "$40",
    image: ""
  },
  {
    id: 8,
    name: "Water color painting for kids",
    instructor: "Jasmine Howard",
    description: "Sign your kids up for this fun, engaging water color class! Price for admission includes a water color set and a sketchbook.",
    time: "11:00am - 12:00pm MW",
    duration: "4 weeks",
    price: "$30",
    image: ""
  },
  {
    id: 9,
    name: "Microsoft Office Course",
    instructor: "Jacob Dualin",
    description: "Feel like you still haven't mastered all things Microsoft Office? Now is the time to change that! Join my class to gain advanced knowledge of Word, Powerpoint, and Excel.",
    time: "4:00pm - 5:00pm MW",
    duration: "4 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 10,
    name: "Resume and cover letter training",
    instructor: "Adam Frost",
    description: "For all those hoping to submit the perfect job application.",
    time: "9:00am - 10:00am F",
    duration: "2 weeks",
    price: "$10",
    image: ""
  },
  {
    id: 11,
    name: "Tax Filing 101",
    instructor: "Michael Doppler",
    description: "You need to file taxes every year, yet you still aren't sure how it works. Register for this course and you'll be able to file your own taxes next time around. SAVE MONEY.",
    time: "8:00am - 9:00am M",
    duration: "3 weeks",
    price: "$40",
    image: ""
  },
  {
    id: 12,
    name: "Community Book Club!",
    instructor: "Lindsey Vern",
    description: "NOT A COURSE. This is a Book Club that we would love for you to join if you love to read! This time around we'll be reading Les Miserables.",
    time: "2:00pm - 3:00pm F",
    duration: "6 weeks",
    price: "$5",
    image: ""
  },
  {
    id: 13,
    name: "Maracas for Beginners",
    instructor: "Josephine Louis",
    description: "This is a quick course that teaches you how to play the maracas WELL. I've played for 17 years and it's more complicated than most would think. You'll love it!",
    time: "10:00am - 10:30am MWF",
    duration: "3 weeks",
    price: "$15",
    image: ""
  },
  {
    id: 14,
    name: "Learn Python",
    instructor: "Corbin Mackwell",
    description: "Beginner's course for learning how to code in Python.",
    time: "8:00am - 9:30am MWF",
    duration: "6 weeks",
    price: "$30",
    image: ""
  },
  {
    id: 15,
    name: "Voice Lessons - All ages welcome!",
    instructor: "Sasha Payne",
    description: "I've been teaching voice lessons for 6 years and would love for you or your child to be my next student! Email me for more scheduling options at sasha.payne@gmail.com.",
    time: "3:00pm - 4:00pm Th",
    duration: "10 weeks",
    price: "$100",
    image: ""
  },
  {
    id: 16,
    name: "Ancient and Modern Poetry",
    instructor: "Gregory Barfoot",
    description: "Calling all poetry lovers! In this course we'll be studying poetry throughout the ages as well as writing our own poetry. Students will perform during open mic night at The Hub.",
    time: "7:00pm - 8:00pm M",
    duration: "6 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 17,
    name: "Creating a Happy Marriage",
    instructor: "Christina Walsh",
    description: "This is a 6-week course for newlyweds and not so newlyweds alike. Take the time to learn the best methods for strengthening your marriage and find untapped happiness.",
    time: "6:30pm - 7:30am F",
    duration: "6 weeks",
    price: "$10",
    image: ""
  },
  {
    id: 18,
    name: "Chess",
    instructor: "Rich Evergood",
    description: "This course is for anyone hoping to up their chess game. Learn all of the sneaky moves, professional openings, and checkmate strategies.",
    time: "6:00pm - 7:30pm MW",
    duration: "6 weeks",
    price: "$20",
    image: ""
  },
  {
    id: 19,
    name: "Work out schedule and accountability program",
    instructor: "Brendan Kott",
    description: "During this course we will meet once a week to learn about great exercises and health tips for staying in shape. Each student will receive a schedule print out for recording exercise and eating habits.",
    time: "8:00am - 8:45am M",
    duration: "12 weeks",
    price: "$40",
    image: ""
  },
  {
    id: 20,
    name: "Baking with Florence Swenson",
    instructor: "Florence Swenson",
    description: "Each week we will send out a list of ingredients to purchase and then we will meet online and bake something new and delicious on that same Wednesday! You will learn the best baking tips so anyone can join, even if you've never baked before.",
    time: "2:00pm - 3:30pm W",
    duration: "6 weeks",
    price: "$10",
    image: ""
  }
]

export default mock;