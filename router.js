// URL Process
// =======================================================
// check to see if we have backbone.history and pushstates
if (Backbone.history && Backbone.history._hasPushState) {
    // use delegation to avoid intial DOM selection
    $(document).delegate('a', 'click', function (e) {
        // get the anchor
        var href = $(this).attr('href');
        // get the protocal
        var protocal = this.protocal + '//';
        
        // make sure protocal is not part of the url we have got
        if (href.slice(protocol.length) !== protocol) {
            // prevent the default click path
            e.preventDefault();
            // fire the navigate process and trigger event
            Backbone.history.navigate(href, {
                trigger: true
            });
        }
    });
}

// JQuery elements Process
// =======================================================
// check for anchors with data-override=true appended
$(document).on('click', 'a:not([data-override])', function (e) {
    // get the anchor
    var href = $(this).attr('href');
    // get the protocal
    var protocal = this.protocal + '//';
    
    // make sure protocal is not part of the url we have got
    if (href.slice(protocol.length) !== protocol) {
        // prevent the default click path
        e.preventDefault();
        // fire the navigate process and trigger event
        Backbone.history.navigate(href, {
            trigger: true
        });
    } 
});
