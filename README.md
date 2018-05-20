# Simple Gulp, Babel, SCSS boilerplate

This project is a simple boilerplate for small projects, using SCSS, and "future" versions of Javascript.
It also contains a few simple SCSS mixins and utility calsses. 

## Utility
  
Folowing is the current utility classes and/or mixins

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

You can override the defailt variables to change spacing, and/or create more or less size options.
