## Overview
HTML5 introduces a number of common attributes to many elements. Some of these have
been discussed in the previous section, while others are all new. For the sake of avoiding
repetition in entries, each is discussed here and then shown only in the syntax list later. As
you were warned at the beginning of the chapter, this information is based upon the draft
HTML5 specification and is subject to change. Check the **HTML5** specification at www
.w3.org/TR/html5 for updates and changes. Further note that while some of these attributes
are already implemented in Internet Explorer (such as **contenteditable**) or other modern
browsers, many are not yet implemented, so their usage may be somewhat speculative

:::tip Note

One interesting aspect of these attributes is that while they are defined in the HTML5
specification on all elements, their meaning is unclear or suspect in certain cases. For example,
spell checking images or using interface conventions like accelerators or context menus on
nonvisible elements, particularly those in the head (like **meta**), simply don’t make sense. What
the spec says and what will actually be implemented or used will likely vary.

:::

## Accesskey
Under HTML5, the **accesskey** attribute specifies a keyboard navigation accelerator for the
element. The main differences between this and the commonly supported attribute are that
it can be applied, in theory, to any element in the specification and that it takes a **space-separated** list of key choices. For example,

```html
<form>
<input type="button" value="Show Author" accesskey="t a p">
</form>

```
allows you to accelerate this button simply by pressing a special key like ALT in conjunction
with the character values present in the attribute. There is some discussion about the
attribute eventually supporting words rather than just individual keys

## Contenteditable
Initially a proprietary Microsoft attribute, this HTML5 attribute when set allows users to
directly edit content rendered in the browser. Values are **false**, **true**, and **inherit**. A
value of **false** prevents content from being edited by users; **true** allows editing. The
default value, **inherit**, applies the value of the affected element’s parent element.

## Contextmenu
The contextmenu attribute is used to define an element’s context menu, which is generally
the menu invoked upon a mouse right-click. The attribute’s value should hold a string that
references the **id** value of a `<menu>` tag found in the DOM. If there is no element found or
no value, then the element has no special context menu and the user agent should show its
default menu. Internet Explorer and many other browsers support an **oncontextmenu**
attribute that could be used to implement the idea of this emerging attribute.

## Data-X (Custom Data Attributes)
HTML5 defines a standard way to include developer-defined data attributes in tags, often
for the consumption by script. The general idea is to use the prefix **data**- and then pick a
variable name to include some nonvisual data on a tag. For example, here an **author**
variable has been defined as custom data:

`<p id="p1" data-author="Thomas A. Powell">This is a data-X example</p>`

This value could then be read using the standard DOM `getAttribute()` method,
```html
<form>
<input type="button" value="Show Author" onclick="alert(document.
getElementById('p1').getAttribute('data-author')); " >  </input> 
</form>
```
or using new HTML5 DOM objects and properties for accessing such data:

```html
<form>
<input type="button" value="Show Author" onclick="alert(document.
getElementById('p1').dataset.author);" > </input> 
</form>
```

These attribute values should not be used by a user agent to style when rendering and
are solely for developer use. In many ways, the attribute is the direct consequence of people
just inventing attributes and forgoing validation,

`<p id="p1" data-author="Thomas A. Powell">This is a fake attribute example</p>`

or using class values in a similar manner:

`<p id="p1" class="author-Thomas-A.-Powell">This is a class data example</p>`

:::danger Note
Special characters, particularly colons, should not be used in the **data**- names here. You are
also encouraged to keep the names lowercase for consistency.
:::

## Draggable
This attribute is used to set whether or not an element is draggable. If the attribute is set to
true, the element is draggable. A value of auto sets images and links with an href to be
draggable and all other items to not be draggable. A false value turns off dragging.

`<p draggable="true">Drag me</p>`

`<p draggable="false">Sorry no drag</p>`

Real integration with elements with draggable attributes requires JavaScript usage.
:::tip Try it yourself
```html live
<html>
<head>
<title>Page Title</title>
</head>
<body>
<p draggable="true">Drag me</p>

<p draggable="false">Sorry no drag</p>

</body>
</html>
```
:::

## Hidden
This attribute is a Boolean, or presence-based, attribute that does not require a value. If
you’re using XHTML5, you should use the value of **hidden**, as attributes must have values
with XML syntax.

`<p hidden>I'm hidden</p>`

`<p hidden="hidden">I'm hidden XML syntax style</p>`

When this attribute is specified on an element, the element is not currently relevant and
thus the user agent should not render it. The exact meaning of the attribute is a bit unclear.
It would appear to be similar to the semantics of the CSS property display:none, but the
specification hints that elements that are hidden are active and thus it also is somewhat
different from this common construct. Once browsers implement this attribute, the meaning
may be clarified. This attribute was initially called **irrelevant** in earlier HTML5 drafts.

:::tip Try it yourself
```html live
<html>
<head>
<title>Page Title</title>
</head>
<body>

<p>I'm not hidden</p>

<p hidden>I'm hidden</p>

<p hidden="hidden">I'm hidden XML syntax style</p>

</body>
</html>
```
:::

## Itemid
This attribute is used to set a global identifier for a microdata item. This is an optional
attribute, but if it is used, it must be placed in an element that sets both the **itemscope** and
**itemtype** attributes. The value must be in the form of a URL.

```html
<div itemscope itemtype="http://ssa.gov/People"
 itemid="http://ssa.gov/SSN/123456789">
 <span itemprop="firstname">Joe</span>
 <span itemprop="lastname">Smith</span>
</div>
```
## Itemprop
This attribute is used to add a name/value pair to a microdata item. Any child of a tag with
an **itemscope** attribute can have an **itemprop** attribute set in order to add a property to
that item. The name of the property is the value set for the **itemprop** attribute. The value
depends on what type of element the attribute is added to. If the element is an **audio**,
**embed**, **iframe**, **img**, **source**, or **video** tag, then the value is set to the **src** of that tag.
If the element is an **a**, **area**, or **link** tag, then the value is set to the **href** of that tag. If
the element is a time tag, then the value is set to the **datetime** attribute of that tag. If the
element is a meta tag, then the value is set to the **content** attribute of that tag. Otherwise,
the value is set to the **textContent** of the tag. A brief example is shown here.

```html
<div itemscope>
<time itemprop="gameday" datetime="2010-06-22">June 22</time>:
The <span itemprop="visitor">Giants</span> at
<span itemprop="home">A's</span>.<br>
<meta itemprop="city" content="Oakland">
</div>
```
If the **item** is set to one of the predefined types, then there is a specific set of values that is
allowed for the **itemprop**.

## Itemref
This attribute is set to indicate what additional elements should be traversed to look for
name/value pairs for the item. By default, only the children are searched. However,
sometimes it does not make sense to have a single parent item if the data is intermingled.
In this case, **itemref** can be set to a space-separated list of additional elements to traverse:

```html
<div itemscope itemref="parentname parentfood"></div>
<div itemscope itemref="childname childfood"></div>
 <span id="parentname"><span itemprop="name">Thomas</span></span> has a
daughter named <span id="childname"><span itemprop="name">Olivia</span>
</span>.
Thomas' favorite food is <span id="parentfood"><span itemprop="food">sushi
</span></span> and Olivia's is <span id="childfood"><span
itemprop="food">French Fries</span>!
```

## Itemscope
This attribute is used to set an element as an item of microdata (see Chapter 2 for more
information on microdata). An element with an **itemscope** attribute creates a new item that
contains a group of name/value pairs defined by enclosed elements with **itemprop**
attributes. For example,

```html
<div itemscope>
 <span itemprop="firstname">Thomas</span>
 <span itemprop="lastname">Powell</span>
</div>
```

sets name/value pairs of firstname: Thomas and lastname: Powell for the item
declared in the `<div>`.

## Itemtype
This attribute is used in conjunction with the **itemscope** attribute in order to define a type
for the microdata item. This is an optional attribute, but if used, it must be placed in the
same element that sets the **itemscope** attribute. The value must be in the form of a URL:

```html
<div itemscope itemtype="http://scores.sports.com/baseball"></div>

<span itemscope itemtype="http://purl.org/vocab/frbr/core#Work"></span>
```

## Spellcheck
This attribute is set to either **true** or **false** and indicates whether the content enclosed by
the element should be spelling and grammar checked:

`<p spellcheck="true">How do you spell potatoe? A man named Dan may never
know.</p>`

If it has no value, the assumed value is **true** unless it inherits **false** from an enclosing
parent. The attribute is meaningful on elements that are interactive for text entry, such as
form fields, or elements that have **contenteditable=true**.
## Tabindex
This attribute, like the **tabindex** attribute initially defined by Internet Explorer, uses a
number to identify the object’s position in the tabbing order for keyboard navigation using
the TAB key. The attribute should be set to a numeric value. User agents will generally move
through fields with **tabindex** set in increasing numeric order, skipping any elements with 0
or a negative value. After moving over all **tabindex** values, any 0 valued fields will be
navigated in order, but negative values will continue to be skipped. Nonnumeric values will
generally result in the browser applying its normal focusing algorithm.