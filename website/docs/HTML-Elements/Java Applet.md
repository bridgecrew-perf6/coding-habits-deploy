## `<applet>` (Java Applet)
This element identifies the inclusion of a Java applet. The strict HTML 4.01 definition does
not include this element; it has been deprecated in favor of `<object>`.

## Standard Syntax (HTML 4.01 Transitional Only)
```html
<applet
 align="bottom | left | middle | right | top"
 alt="alternative text"
 archive="comma-separated list of URLs pointing to archive files"
 class="class name(s)"
 code="URL of Java class file"
 codebase="URL for base referencing"
 height="pixels"
 hspace="pixels"
 id="unique alphanumeric identifier"
 name="unique name for scripting reference"
 object="serialized representation of applet state"
 style="style information"
 title="advisory text"
 vspace="pixels"
 width="pixels">
</applet>

```

## Element-Specific Attributes
**alt** This attribute causes a descriptive text alternative to be displayed in browsers that do
not support Java. Web designers should also remember that content enclosed within an
`<applet>` tag may also be rendered as alternative text.

**archive** This attribute refers to the URL of an archived or compressed version of the applet
and its associated class files, which might help reduce download time.

**code** This attribute specifies the URL of the applet’s class file to be loaded and executed.
Applet filenames are identified by a .class filename extension. The URL specified by code
might be relative to the **codebase** attribute.

**codebase** This attribute gives the absolute or relative URL of the directory where applets’
.class files referenced by the **code** attribute are stored.

**mayscript** In the Netscape implementation, this attribute allows access to an applet by a
scripting language.

**name** This attribute assigns a name to the applet so that it can be identified by other
resources, particularly scripts.

**object** This attribute specifies the URL of a serialized representation of an applet.

**src** As defined for Internet Explorer 4 and higher, this attribute specifies a URL for an
associated file for the applet. Its meaning and use are unclear and it is not part of the HTML
standard.

 ## Examples

 ```html
<applet code="atarigame.class" align="left" archive="game.zip"
 height="250" width="350">
 <param name="difficulty" value="easy">
 <strong>Sorry, you need Java to play this game.</strong>
</applet>

 ```

 ## Compatibility

 | Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, (transitional)      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0 (transitional)                  |Netscape 1+, Opera 4+, Safari 1+ 

:::tip Notes
* The W3C specification does not encourage the use of `<applet>` and prefers the use
of the `<object>` tag. Under the strict definition of HTML 4.01, this element is
deprecated and it is cited as obsolete under HTML5, though currently it still appears
in many versions of the specification. Despite the strong desire of standard bodies to
remove this from common use, it is still often used.

* The HTML 4 specification does not show event-handling attributes for this element,
though you may find that they work. However, given that an applet may include an
interactive object, the sense of capturing events with it as compared to within the
applet can be a bit confusing.

:::