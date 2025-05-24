import './scrollToTop.css'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function ScrollToTop() {
    // Hide the button when the page is at the top
    window.onscroll = function() {scrollFunction()};

    // Hide the button when the page loads


    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.querySelector(".scroll_btn").style.display = "block";
        } else {
            document.querySelector(".scroll_btn").style.display = "none";
        }
    }

    function goup(){
        window.scroll(0,0);
    }

    return (
        <div className="scroll_btn">
            <div className="scroll_button" onClick={goup}>
                <a href="##"><AiOutlineArrowUp /></a>
            </div>
        </div>
    )
}
