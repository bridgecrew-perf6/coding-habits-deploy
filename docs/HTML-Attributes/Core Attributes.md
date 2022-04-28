

## Overview
The HTML and XHTML specifications provide four main attributes that are common to
nearly all elements and have much the same meaning for all elements. These attributes are
class, id, style, and title.
## Class

This attribute indicates the class or classes that a particular element belongs to. A class name might be used by a style sheet to associate style rules with multiple elements or for script access using the **getElementsByClassName()** method. 

As an example, you could associate a special class name called “fancy” with all elements that should be rendered with a particular style named as such in a style sheet. Class values are not unique to a particular element, 

so both `<strong class="fancy"> and <p class="fancy">`  could be used in the same document. 

It also is possible to have multiple values for the class attribute separated by white space; 

`<strong class="fancy special expensive">` would define three classes for the particular strong element.


## Id

This attribute specifies a unique alphanumeric identifier to be associated with an element.
Naming an element is important to being able to access it with a style sheet, a link, or a
scripting language. Names should be unique to a document and should be meaningful;
although **id="x1"** is perfectly valid, **id="Paragraph1"** might be better. Values for the id
attribute must begin with a letter **(A–Z or a–z)** and may be followed by any number of
letters, digits, hyphens, or periods. However, practically speaking, a period character
should not be used within an id value given the use of these values in scripting languages
and possible confusion with class names.

Once elements are named with id, they should be easy to manipulate with a scripting
language. Commonly they are referenced using the DOM method **`getElementById()`**.

Like the **class** attribute, the **id** attribute is also used by style sheets for accessing a
particular element. For example, an element named **Paragraph1** can be referenced by a
style rule in a document-wide style by using a fragment identifier:

`#Paragraph1 {color: blue;}`

Once an element is named using **id**, it also is a potential destination for an anchor. In
the past, an **a** element was used to set a destination; now, any element can be a destination,
for example:

`<a href="#mainContent">Skip to content</a>`

`<div id="mainContent">This is the content of the page.</div>`

One potential problem with the id attribute is that, for some elements, particularly form
controls and images, the **name** attribute already serves its function. You should be careful
when using both **name** and **id** together, especially when using older element syntax with
newer styles. For example, from a linking point of view, the following markup might be
used to set a link destination:
**`<a name="anchorPoint"></a>`**
At some other point in the document, an **id** with the same named value might exist, like so:
**`<p id="anchorPoint">I am the same destination?</p>`**
There is some uncertainty, then, about what this link would do:
**`<a href="#anchorPoint">Where do I go?</a>`**

## Style

   This attribute specifies an inline style associated with an element, which determines the
rendering of the affected element. Because the **style** attribute allows style rules to be used
directly with the element, it gives up much of the benefit of style sheets that divide the
presentation of a markup document from its structure. An example of this attribute’s use is
shown here:

`<strong style="font-family: Arial; font-size: 18px;">Important text</strong>`

## Title

The title attribute is used to provide advisory text about an element or its contents. Given

`<p title="Hey look I am a title tooltip!"> This is the first paragraph of text. </p>`

the **title** attribute sets some message on this first paragraph.

In some cases, such as when applied to the a element, the **title** attribute can provide
additional help in bookmarking. Like the title for the document itself, **title** attribute
values such as advisory information should be short, yet useful. For example,    
**`<p title="A paragraph">`**    provides little information of value, whereas 
**`<p title="HTML: The Complete Reference - Title Example">`** provides much more detail. The attribute can
take an arbitrary amount of text, but the wrapping and presentation of larger titles will
likely vary
