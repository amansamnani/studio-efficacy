jQuery("#animated-thumbnails-gallery")
  .justifiedGallery({
    captions: true,
    lastRow: "hide",
    rowHeight: 200,
    margins: 5
  })
  .on("jg.complete", function () {
    window.lightGallery(
      document.getElementById("animated-thumbnails-gallery"),
      {
        autoplayFirstVideo: false,
        pager: false,
        galleryId: "nature",
        plugins: [lgZoom, lgThumbnail],
        mobileSettings: {
          controls: true,
          showCloseIcon: false,
          download: false,
          rotate: false
        }
      }
    );
  });