## `<address>` (Address)
This block element marks up text indicating authorship or ownership of information. It
generally occurs at the beginning or end of a Web document and usually is rendered in
italics in the absence of CSS

## Standard Syntax
```html
<address
 class="class name(s)"
 dir="ltr | rtl"
 id="unique alphanumeric identifier"
 lang="language code"
 style="style information"
 title="advisory text">
</address>

```

## Attributes Introduced by HTML5
```html
 accesskey="spaced list of accelerator key(s)"
 contenteditable="true | false | inherit"
 contextmenu="id of menu"
 data-X="user-defined data"
 draggable="true | false | auto"
 hidden="hidden"
 itemid="microdata id in URL format"
 itemprop="microdata value"
 itemref="space-separated list of IDs that may contain microdata"
 itemscope="itemscope"
 itemtype="microdata type in URL format"
 spellcheck="true | false"
 tabindex="number"

 ```

 ## Examples

 ```html
<address>PINT, Inc.<br>
2105 Garnet Ave.<br>
San Diego, CA 92109<br>
U.S.A.</address>

 ```

 ## Compatibility

| Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, 5      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0, 1.1, Basic       |Netscape 1+, Opera 4+, Safari 1+ 


:::tip Notes
* Under HTML 2.0 and 3.2, there are no attributes for `<address>`.

* An `<address>` tag may not contain another `<address>` tag.

:::