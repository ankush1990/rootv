// JavaScript Document

function call_websocket(){
"use strict";
// Initialize everything when the window finishes loading

var status = document.getElementById("status");
var url = document.getElementById("url");
var open = document.getElementById("open");
var close = document.getElementById("close");
var send = document.getElementById("globalsend");
var text = document.getElementById("text");
var message = document.getElementById("message");
var socket;

status.textContent = "Not Connected";
url.value = "ws://192.168.1.102:1837";
close.disabled = true;
send.disabled = true;

// Create a new connection when the Connect button is clicked

open.disabled = true;
socket = new WebSocket(url.value, "echo-protocol");

socket.addEventListener("open", function(event) {
  close.disabled = false;
  send.disabled = false;
  status.textContent = "Connected";
});

// Display messages received from the server
socket.addEventListener("message", function(event) {
	var obj = JSON.parse(event.data);
  message.textContent = "Server Says: " + obj[0].status ;
});

// Display any errors that occur
socket.addEventListener("error", function(event) {
  message.textContent = "Error: " + event;
});

socket.addEventListener("close", function(event) {
  open.disabled = false;
  status.textContent = "Not Connected";
});


// Close the connection when the Disconnect button is clicked
close.addEventListener("click", function(event) {
close.disabled = true;
send.disabled = true;
message.textContent = "";
socket.close();
});

// Send text to the server when the Send button is clicked

socket.send(text.value);
text.value = "";

}