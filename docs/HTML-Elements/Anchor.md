## `<a>` (Anchor)
This element defines a hyperlink, the named target destination for a hyperlink, or both.

## Standard Syntax
```html
<a
 accesskey="key"
 charset="character code for language of linked
 resource"
 class="class name(s)"
 coords="comma-separated list of numbers"
 dir="ltr | rtl"
 href="URL"
 hreflang="language code"
 id="unique alphanumeric identifier"
 lang="language code"
 name="name of target location"
 rel="comma-separated list of relationship values"
 rev="comma-separated list of relationship values"
 shape="default | circle | poly | rect"
 style="style information"
 tabindex="number"
 target="frame or window name | _blank | _parent | _self | _top"
 title="advisory text"
 type="content type of linked data">
</a>

```

## Attributes Introduced by HTML5
```html
 contenteditable="true | false | inherit"
 contextmenu="id of menu "
 data-X="user-defined data"
 draggable="true | false | auto"
 hidden="hidden"
 hreflang="language code"
 itemid="microdata id in URL format"
 itemprop="microdata value"
 itemref="space-separated list of IDs that may contain microdata"
 itemscope="itemscope"
 itemtype="microdata type in URL format"
 media="media-type"
 ping="URL list"
 rel="comma-separated list of relationship values"
 spellcheck="true | false"
 tabindex="number"
 type="MIME type of linked data"
 ```

 ## Examples

 ```html
<!-- anchor linking to external file -->
<a href="http://www.democompany.com/">External Link</a>
<!-- anchor linking to file on local file system -->
<a href="file:/c:\html\index.html">local file link</a>
<!-- anchor invoking anonymous FTP -->
<a href="ftp://ftp.democompany.com/freestuff">Anonymous FTP
link</a>
<!-- anchor invoking FTP with password -->
<a href="ftp://joeuser:secretpassword@democompany.com/path/file">
FTP with password</a>
<!-- anchor invoking mail -->
<a href="mailto:fakeid@democompany.com">Send mail</a>
<!-- anchor used to define target destination within document -->
<a name="jump">Jump target</a>
<!-- anchor linking internally to previous target anchor -->
<a href="#jump">Local jump within document</a>
<!-- anchor linking externally to previous target anchor -->
<a href="http://www.democompany.com/document#jump">
Remote jump to a position within a document</a>

 ```

 ## Compatibility

| Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, 5      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0, 1.1, Basic       |Netscape 1+, Opera 4+, Safari 1+ 


:::tip Notes
* If you use the **accesskey** attribute with this element page, be wary of reserved
bindings. See the section “accesskey” under “Other Common Attributes Reference”
earlier in the chapter for a full discussion of this concern.
* The **target** attribute is not defined in browsers that do not support frames, such as
Netscape 1–generation browsers. Furthermore, **target** is not allowed under strict
variants of XHTML but instead is limited to frameset or transitional form. This
attribute, however, does regain its functionality under HTML5.
* See Appendix D for a complete discussion of the URL syntax, which is used as the
value of the **src** attribute.
:::