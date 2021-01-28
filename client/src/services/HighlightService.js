import Prism from "prismjs";

const HighlightService = function(txt){
    if(txt === undefined)
        return '';
    // Convert any HTML code to code with colour on the fly.
    // HTML code is distiguished by '[code]' brackets. Add color to text only within these brackets.
    txt = txt.replace(/\[code\]([\s\S]*?)\[\/code\]/g, function(match, txt) {
        var html = Prism.highlight(txt, Prism.languages.html);
        return '<div class="color-code"><pre>'  +  html + '</pre></div>';
    });
    //
    // Convert any javascript code to code with colour on the fly.
    // Javascript code is distiguished by '[codejs]' brackets.
    txt = txt.replace(/\[codejs\]([\s\S]*?)\[\/codejs\]/g, function(match, txt) {
        var html = Prism.highlight(txt, Prism.languages.javascript);
        return '<div class="color-code"><pre>'  +  html + '</pre></div>';
    });
    return txt;
}

export default HighlightService;
