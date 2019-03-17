const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Ready Player One",
    authors: "Ernest Cline",
    description:
      "Immersing himself in a mid-21st-century technological virtual utopia to escape an ugly real world of famine, poverty and disease, Wade Watts joins an increasingly violent effort to solve a series of puzzles by the virtual world's super-wealthy creator, who has promised that the winner will be his heir.",
    image: "http://books.google.com/books/content?id=J8ahqXjUhAAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://books.google.com/books?id=J8ahqXjUhAAC&dq=ready+player+one&hl=en&source=gbs_api",  
    date: new Date(Date.now())
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    authors: "William Golding",
    description:
      "NEW YORK TIMES BESTSELLER • “Extremely funny . . . inspired lunacy . . . [and] over much too soon.”—The Washington Post Book World Nominated as one of America’s best-loved novels by PBS’s The Great American Read Seconds before Earth is demolished to make way for a galactic freeway, Arthur Dent is plucked off the planet by his friend Ford Prefect, a researcher for the revised edition of The Hitchhiker’s Guide to the Galaxy who, for the last fifteen years, has been posing as an out-of-work actor. Together, this dynamic pair began a journey through space aided by a galaxyful of fellow travelers: Zaphod Beeblebrox—the two-headed, three-armed ex-hippie and totally out-to-lunch president of the galaxy; Trillian (formerly Tricia McMillan), Zaphod’s girlfriend, whom Arthur tried to pick up at a cocktail party once upon a time zone; Marvin, a paranoid, brilliant, and chronically depressed robot; and Veet Voojagig, a former graduate student obsessed with the disappearance of all the ballpoint pens he’s bought over the years. Where are these pens? Why are we born? Why do we die? For all the answers, stick your thumb to the stars! Praise for The Hitchhiker’s Guide to the Galaxy “A whimsical oddyssey . . . Characters frolic through the galaxy with infectious joy.”—Publishers Weekly “Irresistable!”—The Boston Globe",
    image: "http://books.google.com/books/content?id=j24GMN0OtS8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=j24GMN0OtS8C&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "The Catcher in the Rye",
    authors: "J.D. Salinger",
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has since become popular with adolescent readers for its themes of teenage angst and alienation. It has been translated into almost all of the world's major languages. Around 1 million copies are sold each year with total sales of more than 65 million books. The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of innocence, identity, belonging, loss, and connection.",
    image: "http://books.google.com/books/content?id=VPpQjwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=VPpQjwEACAAJ&dq=catcher+in+the+rye&hl=&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "To Kill a Mocking Bird",
    authors: "Harper Lee",
    description:
    "Voted America's Best-Loved Novel in PBS's The Great American Read Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.",
    image: "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=PGR2AwAAQBAJ&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "The Fellowship of the Ring",
    authors: "J.R.R. Tolkien",
    description:
      "The first part of the The Lord of the Rings trilogy. Sauron, the Dark Lord, has gathered to him all the Rings of Power - the means by which he intends to rule Middle-Earth. All he lacks is the One Ring - the ring that rules them all. The ring must be destroyed and Sauron's plan foiled.",
    image: "http://books.google.com/books/content?id=YTqqPwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=YTqqPwAACAAJ&dq=lord+of+the+rings&hl=&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    title: "The Alloy of Law",
    authors: "Brandon Sanderson",
    description:
      "From #1 New York Times bestselling author Brandon Sanderson, the Mistborn series is a heist story of political intrigue and magical, martial-arts action. Three hundred years after the events of the Mistborn trilogy, Scadrial is now on the verge of modernity, with railroads to supplement the canals, electric lighting in the streets and the homes of the wealthy, and the first steel-framed skyscrapers racing for the clouds. Kelsier, Vin, Elend, Sazed, Spook, and the rest are now part of history—or religion. Yet even as science and technology are reaching new heights, the old magics of Allomancy and Feruchemy continue to play a role in this reborn world. Out in the frontier lands known as the Roughs, they are crucial tools for the brave men and women attempting to establish order and justice. One such is Waxillium Ladrian, a rare Twinborn, who can Push on metals with his Allomancy and use Feruchemy to become lighter or heavier at will. After twenty years in the Roughs, Wax has been forced by family tragedy to return to the metropolis of Elendel. Now he must reluctantly put away his guns and assume the duties and dignity incumbent upon the head of a noble house. Or so he thinks, until he learns the hard way that the mansions and elegant tree-lined streets of the city can be even more dangerous than the dusty plains of the Roughs. Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer (forthcoming) The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener's Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher's request, this title is being sold without Digital Rights Management Software (DRM) applied.",
    image: "http://books.google.com/books/content?id=TjiYUm-47bQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    link: "https://play.google.com/store/books/details?id=TjiYUm-47bQC&source=gbs_api",
    date: new Date(Date.now())
  }
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
