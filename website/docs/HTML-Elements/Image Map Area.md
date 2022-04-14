## `<area>` (Image Map Area)
This element defines a hotspot region on an image and associates it with a hypertext link.
This element is used only within a `<map>` tag.

## Standard Syntax 
```html
<area
 accesskey="character"
 alt="alternative text"
 class="class name(s)"
 coords="comma-separated list of values"
 dir="ltr | rtl"
 href="URL"
 id="unique alphanumeric identifier"
 lang="language code"
 nohref="nohref"
 shape="circle | default | poly | rect"
 style="style information"
 tabindex="number"
 target="frame or window name | _blank | _parent | _self |
 _top" (transitional or frameset only)
 title="advisory text">

```

## Attributes Introduced by HTML5
```html
contenteditable="true | false | inherit"
 contextmenu="id of menu"
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


## Element-Specific Attributes
**alt** This attribute contains a text string alternative to display in browsers that cannot
display images.

**coords** This attribute contains a set of values specifying the coordinates of the hotspot
region. The number and meaning of the values depend upon the value specified for the
shape attribute. For a **rect** or **rectangle** shape, the coords value is two x,y pairs: **left**,
**top**, **right**, and **bottom**. For a **circ** or **circle** shape, the **coords** value is x,y,r, where x,y
is a pair specifying the center of the circle and r is a value for the radius. For a **poly** or
**polygon** shape, the **coords** value is a set of x,y pairs for each point in the polygon:
x1,y1,x2,y2,x3,y3, and so on.

**href** This attribute specifies the hyperlink target for the area. Its value is a valid URL.
Either this attribute or the **nohref** attribute must be present in the element.


**hreflang** This attribute, introduced by HTML5, is used to indicate the language of the
linked resource in an image map and should be set to whichever language is specified in
the core **lang** attribute. Browsers will likely not annotate links appropriately with language
information, but style sheet rules using attribute selectors could be used to do this. The
absence of this attribute in previous HTML versions is a clear oversight.

**media** This HTML5 attribute specifies the media format the link destination was defined
for. It is advisory information, and the value should be used to suggest if a destination is
appropriate for screen, print, PDA, and so on.

**name** This attribute is used to define a name for the clickable area so that it can be scripted
by older browsers.

**nohref** This attribute indicates that no hyperlink exists for the associated area. Either this
attribute or the **href** attribute must be present in the element. Under XHTML, this attribute
will have a value of **"nohref"**; under standard HTML, no value is required

**ping** This HTML5–specific attribute is used to specify the URL(s) that will be notified
when a link is activated. If more than a single URL is specified, the addresses should be
separated by spaces. Circa early 2009, no browser implements this feature, and privacy
concerns about this attribute may keep it from ever being widely adopted.

**rel** HTML5 introduces this attribute to specify link relationships on image maps. The lack
of this attribute in previous specifications was clearly an oversight. For image map areas
containing the **href** attribute, this attribute specifies the relationship of the target object to the
link object. The value is a comma-separated list of relationship values. The values and their
semantics will be registered by some authority that might have meaning to the document
author. The default relationship, if no other is given, is void. The rel attribute should be used
only when the **href** attribute is present because it makes no sense with **nohref**.

**shape**This attribute defines the shape of the associated hot spot. HTML 4 defines the
values rect, which defines a rectangular region; **circle**, which defines a circular region;
poly, which defines a polygon; and **default**, which indicates the entire region beyond any
defined shapes. Many browsers, notably Internet Explorer 4 and higher, support alternate
values for shapes, including **circ**, **polygon**, and **rectangle**.

**target** This attribute specifies the target window for hyperlink-referencing frames. The
value is a frame name or one of several special names. A value of **_blank** indicates a new
window. A value of **_parent** indicates the parent frame set containing the source link.
A value of **_self** indicates the frame containing the source link. A value of **_top** indicates
the full browser window.

**type** This attribute specifies the media type in the form of a MIME type for the link target.
Generally, this is provided strictly as advisory information; however, in the future a browser
might add a small icon for multimedia types. For example, a browser might add a small
speaker icon when **type** is set to audio/wav. For a complete list of recognized MIME types,
see www.w3.org/TR/html4/references.html#ref-MIMETYPES. The attribute is commonly
understood for the a element but was introduced by HTML5 to image maps.


 ## Examples

 ```html
<map id="primary" name="primary">
 <area shape="circle" coords="200,250,25" href="another.html">
 <area shape="default" nohref>
</map>

<!-- XHTML syntax -->
<map id="secondary" name="secondary">
 <area shape="rect" coords="10,10,100,100" href="another.html" />
 <area shape="default" nohref="nohref" />
</map>

 ```

 ## Compatibility

| Standards                                          | Browser
|:---------                                          |:--- 
|  HTML 2, 3.2, 4, 4.01, 5      |Firefox 1+, Internet Explorer 2+, 
|  XHTML 1.0, 1.1,              |Netscape 1+, Opera 4+, Safari 1+ 


:::tip Notes
* As an empty element under XHTML or when using XML-style syntax for HTML5,
a trailing slash is required for this element: `<area />`.
*  HTML5 does not define rev attribute for `<area>` tags.
*   Netscape 1–level browsers do not understand the **target** attribute as it relates to
   frames.
* HTML 3.2 defines only **alt**, **coords**, **href**, **nohref**, and **shape**.


:::