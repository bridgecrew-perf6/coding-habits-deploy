# Common Attributes

The HTML and XHTML specifications provide four main attributes that are common to nearly all elements and have much the same meaning for all elements. These attributes are class, id, style, and title. Rather than replicating this information throughout the chapter, it is summarized here.

## Class

This attribute indicates the class or classes that a particular element belongs to. A class name might be used by a style sheet to associate style rules with multiple elements or for script access using the getElementsByClassName() method. 

As an example, you could associate a special class name called “fancy” with all elements that should be rendered with a particular style named as such in a style sheet. Class values are not unique to a particular element, 

so both `<strong class="fancy"> and <p class="fancy">`  could be used in the same document. 

It also is possible to have multiple values for the class attribute separated by white space; 

`<strong class="fancy special expensive">` would define three classes for the particular strong element.