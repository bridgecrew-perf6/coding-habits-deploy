## Overview
In preparation for a more dynamic Web, the W3C has defined a set of core events that
are associated with nearly every (X)HTML element via an event attribute of the style
oneventname (for example, onclick). Most of these events cover simple user interaction,
such as the click of a mouse button or the press of a keyboard key. A few elements, such as
form controls, have some special events associated with them. For example, form events
might indicate that the field has received focus from the user or that the form was
submitted. Intrinsic events, such as a document loading and unloading, are also defined. All
the W3C-defined event attributes are described in below Table.
This event model is commonly extended and is not complete. It will certainly change as
HTML5 is implemented and the Document Object Model (DOM) is extended. More
information about the DOM can be found at www.w3.org/DOM. Browser vendors are
already busy paving the way with their own events.

## HTML5 Events
The event model defined by HTML5 is still emerging, but the common event-handling
attributes are fairly clear and match most of the HTML 4 events, with some interesting new 

| **Event Attribute**              | **Event Description**                                                                                                                                |
|:---------                        |:---                                                                                                                                                |
| onblur                           | Occurs when an element loses focus, meaning that the user has moved focus toanother element, typically either by clicking the mouse or tabbing    |
| onchange                         | Signals that the form control has lost user focus and its value has been modified during its last access.                                          |
| onclick                          | Indicates that the element has been clicked.                                                                                                      |
| ondblclick                       | Indicates that the element has been double-clicked.                                                                                               |
| onfocus                          | Indicates that an element has received focus; namely, it has been selected for  manipulation or data entry.                                       |
| onkeydown                        | Indicates that a key is being pressed down with focus on the element.                                                                           |
| onkeypress                       | Describes the event of a key being pressed and released with focus on the element.                                                                |
| onkeyup                          | Indicates that a key is being released with focus on the element.                                                                                 |
| onload                           | Indicates the event of a window or frame set finishing the loading of a document.                                                                 |
| onmousedown                      | Indicates the press of a mouse button with focus on the element.                                                                                  |
| onmousemove                      | Indicates that the mouse has moved while over the element.                                                                                        |
| onmouseout                       | Indicates that the mouse has moved away from an element.                                                                                          |
| onmouseover                      | Indicates that the mouse has moved over an element.                                                                                                |
| onmouseup                        | Indicates the release of a mouse button with focus on the element.                                                                                |
| onreset                          | Indicates that the form is being reset, possibly by the click of a reset button..                                                                 |
| onselect                         | Indicates the selection of text by the user, typically by highlighting the desired text.                                                          |
| onsubmit                         | Indicates a form submission, generally by clicking a submit button.                                                                               |
| onunload                         | Indicates that the browser is leaving the current document and unloading it from the  window or frame.                                          |
