## Overview

The are a number of common attributes found on elements. Microsoft in particular
introduced a number of new proprietary attributes starting with the Internet Explorer 4
browser. Recently, with the introduction of Internet Explorer 8, proprietary features have
become less common. Interestingly, many of these features are supported by other browsers,
given the desire of their developers to emulate IE, the currently most popular browser. The
attributes continue to be supported and, in some cases, such as **contenteditable**, have
approached de facto standard and in some cases attributes have become part of HTML5.
Given their ubiquity, these attributes are summarized here to avoid redundancy when
presenting the various elements.

## Accesskey
Microsoft applied this W3C attribute to a wider variety of elements than form elements. The
**accesskey** attribute specifies a keyboard navigation accelerator for the element. Pressing
ALT or a similar key (depending on the browser and operating system) in association with
the specified key selects the anchor element correlated with that key.
If access keys are employed, Web page authors are cautioned to be aware of predefined
key bindings in the browsing environment, a sampling of which is detailed in below Table.

:::danger Note

If you take into consideration some older and esoteric browsers, there are even more preset
keys to avoid.

:::


| **Key**  | **Binding**                                 |
|:---------|:---                                         |
| F        | File Menu                                   |
| E        |Edit menu                                    |
| V        | View menu                                   |
| G        | Widgets menu (Opera), older Mozilla Go menu |
| I        | History menu (Safari)                       |
| B        | Bookmarks menu (Mozilla, Safari)            |
| A        | Favorites menu (Internet Explorer)          |
| T        | Tools or Tasks menu                         |
| S        | History or Search menu depending on browser |
| W        | Window menu (Safari and older Mozilla)      |
| A        | Favorites menu (Internet Explorer only)     |
| H        | Help menu                                   |


## Align
Many browsers define the **align** attribute on elements. Transitional versions of (X)HTML
do as well. This attribute generally takes a value of **left**, **right**, or **center**, which
determines how the element and its contents are positioned in a table or the window. The
value of **left** is usually the default. In some cases, a value of **justify** is also supported.
CSS properties like `text-align` and `margin` should be used instead of this attribute when
possible.

## Contenteditable
This proprietary Microsoft attribute, now part of the **HTML5** specification, allows users to
directly edit content in a browser. Values are **false**, **true**, and **inherit**. A value of **false**
prevents content from being edited by users; true allows editing. The default value,
**inherit**, applies the value of the affected element’s parent element. In addition to Internet
Explorer, all  recent major browsers, such as Firefox 3+, Safari 3+, and Opera 9.5+, also
support this attribute.

| **Access Key** | **Suggested Destination**                                         |
|:---------      |:---                                                                     |
| S              | Skip navigation                                                         |
| 1              | Home page                                                               |
| 2              | What’s new                                                              |
| 3              | Site map                                                                |
| 4              | Search                                                                  |
| 5              | Frequently Asked Questions (FAQ)                                        |
| 6              | Help                                                                    |
| 7              | Complaints procedure                                                    |
| 8              | Terms and conditions                                                    |
| 9              | Feedback form                                                           |
| 0              | Access key details (information on these and other keys plus usage)     |


## Datafld
This attribute specifies the column name from the data source object that supplies the
bound data. This attribute is specific to Microsoft’s data binding.

## Dataformatas
This Internet Explorer–specific attribute indicates whether the bound data is plain text or
HTML.

## Datasrc
This attribute indicates the name of the data source object that supplies the data that is
bound to this element. This attribute is specific to Microsoft’s data binding.

## Disabled
Again, Microsoft has applied an existing W3C attribute to a range of elements not associated
with it in the W3C specifications. Elements with the **disabled** attribute set may appear
faded and will not respond to user input. Values under the Microsoft implementation are
**true** and **false**. When the attribute is present, the default value is **true**, so IE 5.5 and
higher will read **disabled** as “on,” even without a value set for the attribute.

## Height
This attribute specifies the height, in pixels, needed by an embedded object, image, iframe,
applet, or any other embeddable item.

## Hidefocus
This proprietary attribute, introduced with Internet Explorer 5.5, hides focus on an
element’s content. Focus will generally be represented with a dotted outline, but elements
with this attribute set to **true** will not show such an indication.

## Hspace
This attribute specifies additional horizontal space, in pixels, to be reserved on either side of
an embedded item like an iframe, applet, image, and so on.

## Language
In the Microsoft implementation, this attribute specifies the scripting language to be used
with an associated script bound to the element, typically through an event handler attribute.
Possible values might include javascript, jscript, vbs, and vbscript. Other values
that include the version of the language used, such as JavaScript1.1, might also be
possible. The reason this feature is supported is that it is possible in Internet Explorer to
run multiple script languages at the same time, which requires that you indicate on
element-level event handlers which scripting language is in play, as demonstrated here:

```html
<p onclick="alert('Hi from JavaScript');" language="JavaScript">
 Click me (JavaScript)</p>
<p onclick="MsgBox('Hi from VBScript')" language="VBScript">
 Click me (VBScript)</p>
 ```

 ## Tabindex
This attribute uses a number to identify the object’s position in the tabbing order for
keyboard navigation using the TAB key. While **tabindex** is defined for some elements as
part of W3C standards, IE 5.5 added support for this attribute to a wider range of elements.
Under IE 5.5 or higher, this focus can be disabled with the **hidefocus** attribute.

## Unselectable
This proprietary Microsoft attribute can be used to prevent content displayed from being
selected. Testing suggests that this might not work consistently. Values are **off** (selection
permitted) and **on** (selection not allowed).

## Vspace
This attribute specifies additional vertical space, in pixels, to be reserved above and below
an embedded object, image, iframe, applet, or any other embeddable item.

## Width
This attribute specifies the width, in pixels, needed by an embedded object, image, iframe,
applet, or any other embeddable item.