# anki-ogs

This project will let you use puzzles from [OGS](https://online-go.com) as flashcards in [Anki](https://apps.ankiweb.net/). You can use it to study Go/Baduk/Weiqi problems using spaced repetition. The project has two parts:

- The Anki note type
- The OGS collection exporter

## Anki Note Type

This is the part you need to play the puzzles within Anki.

### Installation

You have two options to get the custom note type into Anki.

1. The easy way is to import [example-deck.apkg](example-deck.apkg) into Anki. This will automatically create the note type.
2. The other way is to create the note type yourself.
	- Create a new note type in Anki. The name doesn't matter.
	- Create the fields listed in [fields.txt](fields.txt).
	- Set the front template of the card to the code in [front-template.html](front-template.html).
	- Set the back template of the card to the code in [back-template.html](back-template.html).
	- Set the styling of the card to the code in [styling.css](styling.css).

### Usage

The flashcard will load the OGS website where you will be able to play through the puzzle. You cannot play offline.

The puzzle is on the back of the card. On PC, the puzzle will automatically be displayed. On other platforms, you may need to press "Show answer" first.

The flashcards use the ID field to load the puzzle, for example [https://online-go.com/puzzle/**2824**](https://online-go.com/puzzle/2824). You can enter cards by hand or use the OGS collection exporter.

## OGS Collection Exporter

This part lets you download puzzle collections directly from the OGS website, so you can import them into Anki using the custom note type.

### Installation

- Install the [Tampermonkey](https://www.tampermonkey.net/) browser extension.
- Install [exporter.user.js](exporter.user.js) into Tampermonkey.
	- In the Tampermonkey extension settings, open the Utilities tab. You can use "Install from URL" and the above link.

### Usage

On the OGS website, puzzle pages will have an "Export to Anki" link just below the name of the puzzle collection. You may need to refresh the page to see it. Clicking the link will download a file containing the puzzle collection in CSV format.

You can import the file into Anki using the "Text separated by tabs or semicolons" format. Be sure to select the correct note type when importing.