import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'
import { Journal } from './journal.js';
import { Entry } from './journal.js';

let journal = new Journal();

// Display Content Function
function displayContent(journal) {
    let displayDiv = $("#display-list");
    let htmlString = "";
    Object.keys(journal.entries).forEach(function (key) {
        let entry = journal.findEntry(key);
        htmlString += "<div><h3>" + entry.title + "</h3><p>" + entry.getTeaser() + "<p></div>";
    })
    displayDiv.html(htmlString)
}


attachListener();
$("#form").submit(function (e) {
    e.preventDefault();

    const title = $("#title-input").val();
    const body = $("#body-input").val();
    let entry = new Entry(title, body);
    journal.addEntry(entry);
    displayContent(journal);
    $("#title-input").val("");
    $("#body-input").val("");

})