# Simple Gulp, Babel, SCSS boilerplate

This project is a simple boilerplate for small projects, using SCSS, and "future" versions of Javascript.
It also contains a few simple SCSS mixins and utility calsses. 

## Utility
  
Folowing is the current and future utility classes and/or mixins



### Spacing

Taking inspiration form Bootstraps spacing utility classes this is mixins and standard classes for spacing elements using margin and padding. The code is a remix of [James Newell sass-spacing package](https://github.com/digitaledgeit/sass-spacing), without breakpoints.

**Example usage of classes:**

 ```HTML
 <div class="mx:auto py:2">Content</div>
 ```

* `m` = maring & `p` = padding
* `x`, `y`, `l`, `r`, `t`, `b` is the possible directions
* `0`, `1`, `2`, `3`, `4`, `5`, `6`, `auto` is the size of the spacing


**Example usage of Mixins:**

```SCSS
.content {
  @include mx(auto);
  @include py(2);
}
```

**Default spacing:**

The default spacing is a s follows:
```SCSS
// The spacing sizes is defined as follows
$spacing-sizes: (
  0: 0rem,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 2rem,
  5: 4rem,
  6: 8rem,
) !default;

// Choose if !important is used
$spacing-important: false;
```

You can override the default variables to change spacing, and/or create more or less size options.

### Box-Shadow
The Shadow utility classes and mixins are inspired by the material design shadow levels.
The code is inspired by [Florian Kutschera medium post](https://medium.com/@Florian/freebie-google-material-design-shadow-helper-2a0501295a2d).

**Example usage of classes:**

 ```HTML
 <div class="shadow:s shadow-hover:xxl">Content</div>
 ```

**Example usage of Mixins:**

```SCSS
.content {
  @include shadow(s);
  @include shadow-hover(xxl);
}
```

**Default shadows:**
```SCSS
// Shadow size variables
$shadow-s:    0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24) !default;
$shadow-m:    0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !default;
$shadow-l:    0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) !default;
$shadow-xl:   0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !default;
$shadow-xxl:  0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22) !default;

// Shadow sizes
$shadow-sizes: (
  s:    $shadow-s,
  m:    $shadow-m,
  l:    $shadow-l,
  xl:   $shadow-xl,
  xxl:  $shadow-xxl
) !default;
```
You can override the default variables to change shadows, and/or create more or less options.

### Flex
_Comming soon_

### Text
_Comming soon_

### Position
_Comming soon_

### Border
_Comming soon_

### Media
_Comming soon_

### Color
_Comming soon_


