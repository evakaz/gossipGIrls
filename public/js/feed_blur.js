const elementIsVisibleInViewport = (partiallyVisible = false) => {
    const el = document.getElementById("first_three_pictures");
    if (el) {
        const { top, left, bottom, right } = el.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        return partiallyVisible
            ? ((top > 0 && top < innerHeight) ||
                (bottom > 0 && bottom < innerHeight)) &&
            ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
            : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
    }
    else {
        console.log("The element hasn't been found");
    }
};

window.onscroll = function() {
    var x = elementIsVisibleInViewport();
    // console.log(Date.now(), x);
};