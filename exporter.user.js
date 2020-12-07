// ==UserScript==
// @name         Anki Exporter for OGS Puzzle Collections
// @namespace    http://kendallfrey.com/
// @version      0.1
// @description  Exports OGS puzzle collections as CSV for importing into Anki
// @author       Kendall Frey
// @match        https://online-go.com/puzzle/*
// @grant        none
// ==/UserScript==

(function() {
	"use strict";

	setTimeout(load, 500);

	function load()
	{
		const collection = document.querySelector("div.right-col > dl.horizontal > dd:nth-child(4)");
		if (collection !== null)
		{
			const collectionName = collection.textContent;
			const csv = [...document.getElementById("selected_puzzle").childNodes].map(o => o.value + "," + o.textContent).join("\n");
			const a = document.createElement("a");
			a.textContent = "Export to Anki";
			a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
			a.download = collectionName + ".csv";
			collection.appendChild(document.createElement("br"));
			collection.appendChild(a);
		}
		else
		{
			setTimeout(load, 500);
		}
	}
})();