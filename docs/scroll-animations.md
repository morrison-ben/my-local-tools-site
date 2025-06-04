# Scroll Animation Implementation Guide

## Overview
This document outlines how to implement scroll-triggered animations for sections on the Cerana landing page. These animations will create a more engaging user experience by having content slide into view as the user scrolls down the page.

## Implementation Steps

### 1. Add Animation CSS Classes

Add the following CSS classes to `src/App.css`:

```css
/* Scroll Animation Base Classes */
.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Animation Variations */
.slide-in-left {
  transform: translateX(-50px);
}

.slide-in-right {
  transform: translateX(50px);
}

.slide-in-up {
  transform: translateY(50px);
}

.slide-in-down {
  transform: translateY(-50px);
}

.fade-in {
  /* Only opacity changes, no translation */
}

/* Active State - Applied when element is visible */
.animate-active {
  opacity: 1;
  transform: translate(0);
}

/* Optional: Animation Delay Classes */
.delay-100 { transition-delay: 100ms; }
.delay-200 { transition-delay: 200ms; }
.delay-300 { transition-delay: 300ms; }
.delay-400 { transition-delay: 400ms; }
.delay-500 { transition-delay: 500ms; }
```

### 2. Set Up Intersection Observer

Add the following JavaScript to `src/App.jsx`:

```jsx
import React, { useState, useEffect } from 'react';

export default function LandingPage() {
  // Existing state and functions...
  
  useEffect(() => {
    // Configure the Intersection Observer
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin
      threshold: 0.15 // Trigger when 15% of element is visible
    };
    
    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class when element is visible
          entry.target.classList.add('animate-active');
          // Optionally unobserve after animation is triggered
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Observe each element
    animatedElements.forEach(el => observer.observe(el));
    
    // Clean up observer on component unmount
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  // Rest of component...
```

### 3. Apply Animation Classes to Sections

Apply the animation classes to sections in your JSX:

```jsx
// Hero section with fade-in animation
<header className="py-5 animate-on-scroll fade-in">
  {/* Content */}
</header>

// Product showcase with slide-in-left animation
<section className="py-5 animate-on-scroll slide-in-left" style={{minHeight: '600px'}}>
  {/* Content */}
</section>

// Benefits section with slide-in-up animation
<section className="py-5 animate-on-scroll slide-in-up" id="benefits">
  {/* Content */}
</section>
```

### 4. Animate Child Elements Sequentially

For staggered animations within a section:

```jsx
<div className="row g-4">
  <div className="col-lg-4 animate-on-scroll slide-in-up delay-100">
    {/* Content */}
  </div>
  <div className="col-lg-4 animate-on-scroll slide-in-up delay-300">
    {/* Content */}
  </div>
  <div className="col-lg-4 animate-on-scroll slide-in-up delay-500">
    {/* Content */}
  </div>
</div>
```

## Advanced Customization

### Animation Speed Adjustment

To adjust animation speed, modify the transition duration in the CSS:

```css
.animate-on-scroll {
  transition: opacity 0.6s ease, transform 0.6s ease; /* Faster */
  /* or */
  transition: opacity 1.2s ease, transform 1.2s ease; /* Slower */
}
```

### Easing Functions

Experiment with different easing functions for varied animation feels:

```css
/* Sharp start, gradual end */
transition: opacity 0.8s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);

/* Bounce effect */
transition: opacity 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55), transform 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
```

### Responsive Considerations

For mobile devices, you may want to reduce animation distance or disable certain animations:

```css
@media (max-width: 768px) {
  .slide-in-left, .slide-in-right {
    transform: translateX(0); /* Disable horizontal slide on mobile */
  }
  
  .slide-in-up, .slide-in-down {
    transform: translateY(25px); /* Reduce vertical slide distance */
  }
}
```

## Troubleshooting

### Animations Not Triggering
- Ensure elements have both `animate-on-scroll` and a specific animation class (e.g., `slide-in-up`)
- Check that the threshold value isn't too high (try lowering to 0.05)
- Verify the element is actually scrolling into view (not hidden or positioned off-screen)

### Animations Appear Janky
- Reduce the transform distance (e.g., change from 50px to 30px)
- Increase the transition duration for smoother movement
- Use the `will-change: opacity, transform;` CSS property for better performance

### Initial Page Load Shows Animations
- Add a small delay before starting to observe elements:
```jsx
setTimeout(() => {
  animatedElements.forEach(el => observer.observe(el));
}, 100);
```