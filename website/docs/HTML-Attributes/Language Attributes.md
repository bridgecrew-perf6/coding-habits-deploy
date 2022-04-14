
## Overview

The use of other languages in addition to English in a Web page might require that the text
direction be changed from left to right or right to left or might require other localization
modifications. Once supporting non-ASCII languages becomes easier, it might be more
common to see documents in mixed languages. Thus, there must be a way to indicate the
language in use and its formatting.


## Dir

The **dir** attribute sets the text direction as related to the **lang** attribute. The accepted values
under the HTML 4.01 specification are **ltr** (left to right) and **rtl** (right to left). It should be
possible to override whatever direction a user agent sets by using this attribute with the **bdo**
element:

```html
<div>
Standard text running left to right in most cases.
<bdo dir="rtl">Napoleon never really said <q>Able was I ere
I saw Elba.</q></bdo> More standard text.
</div>
```


## Lang

The **lang** attribute indicates the language being used for the enclosed content. The language
is identified using the ISO standard language abbreviations, such as fr for French, en for
English, and so on. RFC 1766 (www.ietf.org/rfc/rfc1766.txt) describes these codes and their
formats
