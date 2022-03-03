import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css'
import { Journal } from './journal.js';
import { Entry } from './journal.js';

let journal = new Journal();

function displayContent(journal) {
    let displayDiv = $("#display-list");
    let htmlString = "";
    Object.keys(journal.entries).forEach(function (key) {
        let entry = journal.findEntry(key);
        htmlString += "<div class = 'mt-4 '><h4>" + entry.title + "</h4><p class ='entry-body' id = " + entry.id + ">" + entry.getTeaser() + "<p></div>";
    })
    displayDiv.html(htmlString)
}


// AttachListener Function
function attachListener(){
    $("div#display-list").on("click" , "p" , function(){
        showBodyContent(this.id);
    })
}

// ShoWBodyContent Function 
function showBodyContent(id){
    let entry = journal.findEntry(id);
    $("#word-amount").html(entry.countWord());
    $("#vowel-amount").html(entry.countVowel());
    $("#conso-amount").html(entry.countConsonant());
    $("#" + id).html(entry.body)
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