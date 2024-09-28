import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Footer.css'
export const Footer = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
      navigate(path);
    };
    const handleEmailClick = () => {
        window.location.href = 'mailto:helpdesk@solargaga.com';
      };
    
      const handlePhoneClick = () => {
        window.location.href = 'tel:+6562911033';
      };
    
      const handleLocationClick = () => {
        window.open('https://www.google.com/maps/search/?api=1&query=91+Kitchener+Rd%2C+%2301-02%2C+Singapore+208509', '_blank');
      };
  return (
    <div className='footer'>
        <div className='footer1'>
            <div className='footer-card1'>
                <img src={logo} />
                <p>Our goals is to simplify your journey and<br/> make the process as seamless as possible</p>
                <div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="14" height="23" viewBox="0 0 14 23" fill="none">
<path d="M8.85306 22.2677V12.3286H12.3572L12.8818 8.45504H8.85296V5.98197C8.85296 4.8605 9.18002 4.09628 10.8692 4.09628L13.0236 4.09531V0.630885C12.651 0.583764 11.3721 0.478271 9.88433 0.478271C6.7781 0.478271 4.65152 2.28338 4.65152 5.59846V8.45504H1.13843V12.3286H4.65152V22.2677H8.85306V22.2677Z" fill="white"/>
</svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19" fill="none">
<path d="M15.9033 0.537616V0.533691H16.925L17.2983 0.60825C17.5472 0.656654 17.7731 0.720088 17.9761 0.798571C18.1792 0.877054 18.3757 0.968624 18.5656 1.07326C18.7555 1.1779 18.9278 1.28452 19.0823 1.39308C19.2356 1.50034 19.3731 1.61414 19.4949 1.73448C19.6154 1.85613 19.8034 1.88752 20.0588 1.82866C20.3142 1.7698 20.5893 1.68804 20.884 1.5834C21.1788 1.47876 21.4702 1.36104 21.7584 1.23023C22.0465 1.09942 22.2221 1.01636 22.2849 0.981043C22.3465 0.944431 22.3793 0.924811 22.3832 0.922181L22.3871 0.916295L22.4067 0.906485L22.4264 0.896674L22.446 0.886864L22.4657 0.877054L22.4696 0.871168L22.4755 0.867243L22.4814 0.863319L22.4853 0.857433L22.505 0.851547L22.5246 0.847623L22.5207 0.877054L22.5148 0.906485L22.505 0.935916L22.4952 0.965347L22.4853 0.984968L22.4755 1.00459L22.4657 1.03402C22.4591 1.05364 22.4526 1.07979 22.446 1.1125C22.4395 1.14521 22.3773 1.276 22.2594 1.50492C22.1415 1.73383 21.9941 1.966 21.8173 2.20145C21.6405 2.4369 21.482 2.61478 21.3418 2.73513C21.2004 2.85678 21.1067 2.9418 21.0609 2.9902C21.015 3.0399 20.9594 3.08568 20.8939 3.12755L20.7956 3.1923L20.776 3.20211L20.7563 3.21192L20.7524 3.2178L20.7465 3.22173L20.7406 3.22565L20.7367 3.23154L20.717 3.24135L20.6974 3.25116L20.6935 3.25705L20.6876 3.26097L20.6817 3.26489L20.6777 3.27078L20.6738 3.27667L20.6679 3.28059L20.662 3.28451L20.6581 3.2904H20.7563L21.3065 3.17268C21.6732 3.09419 22.0236 2.99937 22.3576 2.88818L22.8881 2.71159L22.9471 2.69197L22.9765 2.68216L22.9962 2.67235L23.0158 2.66254L23.0355 2.65273L23.0551 2.64292L23.0944 2.63703L23.1337 2.63311V2.67235L23.1239 2.67627L23.1141 2.68216L23.1102 2.68805L23.1042 2.69197L23.0983 2.69589L23.0944 2.70178L23.0905 2.70767L23.0846 2.71159L23.0787 2.71551L23.0748 2.7214L23.0709 2.72729L23.0649 2.73121L23.0551 2.75083L23.0453 2.77045L23.0394 2.77438C23.0368 2.7783 22.9536 2.88947 22.7899 3.10793C22.6261 3.32768 22.5377 3.43885 22.5246 3.44148C22.5115 3.4454 22.4932 3.46502 22.4696 3.50034C22.4474 3.53695 22.3085 3.68281 22.0531 3.93788C21.7977 4.19295 21.5475 4.41989 21.3026 4.61872C21.0563 4.81885 20.9319 5.06476 20.9292 5.35646C20.9253 5.64685 20.9102 5.97518 20.884 6.34142C20.8578 6.70768 20.8087 7.10335 20.7367 7.52847C20.6646 7.95359 20.5533 8.4343 20.4027 8.97059C20.252 9.50689 20.0686 10.0301 19.8525 10.5403C19.6364 11.0504 19.4104 11.5082 19.1747 11.9137C18.9389 12.3192 18.7228 12.6626 18.5263 12.9438C18.3298 13.225 18.1301 13.4899 17.927 13.7384C17.724 13.987 17.4673 14.2669 17.1569 14.5782C16.8451 14.8882 16.6748 15.0583 16.646 15.0883C16.6159 15.1171 16.4875 15.2244 16.2609 15.4101C16.0356 15.5972 15.7933 15.7842 15.5339 15.9713C15.2759 16.157 15.0388 16.312 14.8227 16.4363C14.6065 16.5605 14.3459 16.7024 14.0407 16.862C13.7368 17.0229 13.408 17.1721 13.0544 17.3094C12.7007 17.4467 12.3274 17.5743 11.9344 17.692C11.5415 17.8097 11.1616 17.9013 10.7949 17.9667C10.4281 18.0321 10.0122 18.0877 9.54722 18.1335L8.84972 18.2021V18.2119H7.57261V18.2021L7.4056 18.1923C7.29428 18.1858 7.20258 18.1792 7.13053 18.1727C7.0585 18.1662 6.78669 18.1302 6.31515 18.0648C5.8436 17.9994 5.47357 17.934 5.20504 17.8686C4.93653 17.8032 4.53701 17.6789 4.00652 17.4958C3.47603 17.3127 3.02217 17.1276 2.64493 16.9405C2.269 16.7548 2.03323 16.6371 1.9376 16.5874C1.84329 16.5389 1.7372 16.4788 1.61931 16.4068L1.44248 16.2989L1.43857 16.293L1.43265 16.2891L1.42676 16.2852L1.42283 16.2793L1.40318 16.2695L1.38353 16.2597L1.37962 16.2538L1.37371 16.2499L1.36782 16.246L1.36389 16.2401L1.35998 16.2342L1.35406 16.2303H1.34424V16.191L1.36389 16.1949L1.38353 16.2008L1.47195 16.2106C1.53089 16.2172 1.69136 16.227 1.95332 16.2401C2.21531 16.2532 2.49364 16.2532 2.78836 16.2401C3.08307 16.227 3.38435 16.1975 3.69216 16.1518C3.99998 16.106 4.36347 16.0275 4.78261 15.9163C5.20178 15.8051 5.58688 15.673 5.93793 15.52C6.28766 15.3656 6.53652 15.2505 6.68455 15.1747C6.83124 15.1001 7.05522 14.9614 7.35648 14.7587L7.80838 14.4546L7.81231 14.4487L7.81821 14.4448L7.82412 14.4408L7.82803 14.435L7.83196 14.4291L7.83785 14.4252L7.84377 14.4212L7.84768 14.4153L7.86733 14.4095L7.88697 14.4055L7.8909 14.3859L7.8968 14.3663L7.90271 14.3624L7.90662 14.3565L7.74944 14.3467C7.64466 14.3401 7.54314 14.3336 7.4449 14.327C7.34666 14.3205 7.19276 14.2911 6.98317 14.2388C6.77361 14.1864 6.54766 14.1079 6.30532 14.0033C6.063 13.8987 5.82723 13.7744 5.598 13.6305C5.36879 13.4866 5.20308 13.3669 5.10091 13.2715C5.00006 13.1773 4.86906 13.0439 4.70795 12.8712C4.54816 12.6972 4.4093 12.5187 4.29142 12.3355C4.17353 12.1524 4.06089 11.9411 3.95349 11.7018L3.7904 11.3447L3.78057 11.3153L3.77075 11.2858L3.76485 11.2662L3.76092 11.2466L3.7904 11.2505L3.81987 11.2564L4.03599 11.2858C4.18009 11.3055 4.40604 11.312 4.71385 11.3055C5.02167 11.2989 5.23451 11.2858 5.3524 11.2662C5.47029 11.2466 5.54234 11.2335 5.56853 11.227L5.60782 11.2172L5.65694 11.2074L5.70606 11.1975L5.70999 11.1917L5.71589 11.1877L5.7218 11.1838L5.72571 11.1779L5.68641 11.1681L5.64712 11.1583L5.60782 11.1485L5.56853 11.1387L5.52923 11.1289C5.50304 11.1223 5.4572 11.1093 5.3917 11.0896C5.32621 11.07 5.14938 10.9981 4.8612 10.8738C4.57305 10.7495 4.34382 10.6285 4.17353 10.5108C4.00282 10.3928 3.84005 10.2636 3.68626 10.1243C3.53301 9.98302 3.36471 9.8012 3.18131 9.57884C2.99794 9.35647 2.83421 9.09813 2.69012 8.80382C2.54604 8.50951 2.43798 8.22828 2.36593 7.96013C2.29417 7.69355 2.24682 7.42101 2.22448 7.14587L2.1891 6.73383L2.20874 6.73776L2.22839 6.74364L2.24804 6.75346L2.26769 6.76327L2.28734 6.77308L2.30698 6.78289L2.61153 6.92023C2.81457 7.0118 3.06671 7.09028 3.36797 7.15568C3.66925 7.22108 3.84934 7.25706 3.90828 7.26359L3.9967 7.2734H4.17353L4.16962 7.26752L4.16371 7.26359L4.15781 7.25967L4.15388 7.25378L4.14997 7.2479L4.14406 7.24397L4.13816 7.24005L4.13423 7.23416L4.11459 7.22435L4.09494 7.21454L4.09103 7.20866L4.08511 7.20473L4.07922 7.20081L4.07529 7.19492L4.05564 7.18511L4.03599 7.1753L4.03208 7.16941C4.02816 7.16679 3.97182 7.12493 3.86309 7.04384C3.75568 6.96143 3.64304 6.85484 3.52515 6.72402C3.40726 6.59321 3.28938 6.45587 3.17149 6.31199C3.05338 6.16778 2.94819 6.01349 2.85712 5.8509C2.76545 5.6874 2.6685 5.4794 2.56633 5.22696C2.46548 4.97582 2.38886 4.72271 2.33646 4.46764C2.28407 4.21257 2.2546 3.96078 2.24804 3.71225C2.2415 3.46371 2.24804 3.25116 2.26769 3.07457C2.28734 2.89799 2.32663 2.6985 2.38557 2.47614C2.44452 2.25378 2.52967 2.01833 2.641 1.7698L2.808 1.397L2.81783 1.36757L2.82765 1.33814L2.83357 1.33422L2.83748 1.32833L2.8414 1.32244L2.8473 1.31852L2.85321 1.32244L2.85712 1.32833L2.86105 1.33422L2.86695 1.33814L2.87286 1.34206L2.87677 1.34795L2.8807 1.35384L2.8866 1.35776L2.89642 1.37738L2.90624 1.397L2.91216 1.40093L2.91607 1.40681L3.18131 1.70112C3.35814 1.89733 3.56773 2.11643 3.81004 2.35842C4.05238 2.6004 4.18663 2.72597 4.21283 2.73513C4.23904 2.74559 4.27177 2.77567 4.31106 2.82539C4.35036 2.87379 4.48135 2.98956 4.70402 3.17268C4.92671 3.3558 5.21815 3.56837 5.57835 3.81035C5.93858 4.05233 6.33808 4.29106 6.77687 4.5265C7.21569 4.76195 7.68723 4.9745 8.19152 5.16418C8.69582 5.35385 9.04948 5.47811 9.2525 5.53697C9.45554 5.59583 9.80264 5.67104 10.2938 5.76261C10.785 5.85418 11.1551 5.91304 11.4039 5.9392C11.6528 5.96535 11.8231 5.9804 11.9148 5.98432L12.0523 5.98825L12.0484 5.95882L12.0425 5.92939L12.0032 5.68413C11.977 5.52063 11.9639 5.29171 11.9639 4.9974C11.9639 4.70309 11.9868 4.43168 12.0327 4.18314C12.0785 3.93461 12.1473 3.68281 12.239 3.42775C12.3307 3.17268 12.4204 2.96795 12.5082 2.81362C12.5972 2.66058 12.7138 2.48595 12.8579 2.28974C13.002 2.09354 13.1886 1.8908 13.4178 1.6815C13.6471 1.47221 13.909 1.28581 14.2038 1.12231C14.4985 0.958813 14.7703 0.834536 15.0191 0.749519C15.268 0.664503 15.4776 0.608898 15.6479 0.582743C15.8182 0.556589 15.9033 0.54154 15.9033 0.537616Z" fill="white"/>
</svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
<path fillRule="evenodd" clipRule="evenodd" d="M1.34424 11.373C1.34424 7.021 1.34424 4.84499 2.38129 3.27768C2.84438 2.5778 3.44376 1.97841 4.14364 1.51532C5.71096 0.478271 7.88696 0.478271 12.239 0.478271C16.591 0.478271 18.767 0.478271 20.3343 1.51532C21.0342 1.97841 21.6336 2.5778 22.0967 3.27768C23.1337 4.84499 23.1337 7.021 23.1337 11.373C23.1337 15.725 23.1337 17.901 22.0967 19.4683C21.6336 20.1682 21.0342 20.7676 20.3343 21.2307C18.767 22.2677 16.591 22.2677 12.239 22.2677C7.88696 22.2677 5.71096 22.2677 4.14364 21.2307C3.44376 20.7676 2.84438 20.1682 2.38129 19.4683C1.34424 17.901 1.34424 15.725 1.34424 11.373ZM17.8791 11.3732C17.8791 14.4882 15.3538 17.0135 12.2388 17.0135C9.1237 17.0135 6.59843 14.4882 6.59843 11.3732C6.59843 8.2581 9.1237 5.73283 12.2388 5.73283C15.3538 5.73283 17.8791 8.2581 17.8791 11.3732ZM12.2388 15.1052C14.2999 15.1052 15.9708 13.4343 15.9708 11.3732C15.9708 9.31201 14.2999 7.64111 12.2388 7.64111C10.1776 7.64111 8.50671 9.31201 8.50671 11.3732C8.50671 13.4343 10.1776 15.1052 12.2388 15.1052ZM18.1018 6.77484C18.8337 6.77484 19.4271 6.18148 19.4271 5.44953C19.4271 4.71758 18.8337 4.12422 18.1018 4.12422C17.3699 4.12422 16.7765 4.71758 16.7765 5.44953C16.7765 6.18148 17.3699 6.77484 18.1018 6.77484Z" fill="white"/>
</svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="23" viewBox="0 0 24 23" fill="none">
<path d="M1.34424 4.01262C1.34424 3.31389 1.58962 2.73745 2.08037 2.2833C2.57112 1.82913 3.20911 1.60205 3.99431 1.60205C4.7655 1.60205 5.38945 1.82563 5.86619 2.27282C6.35693 2.73397 6.60232 3.33485 6.60232 4.07551C6.60232 4.74627 6.36396 5.30523 5.88722 5.75243C5.39647 6.21358 4.75147 6.44415 3.95224 6.44415H3.93121C3.16002 6.44415 2.53608 6.21358 2.05934 5.75243C1.5826 5.29127 1.34424 4.71133 1.34424 4.01262ZM1.61766 22.3539V8.35165H6.28683V22.3539H1.61766ZM8.87381 22.3539H13.543V14.5353C13.543 14.0462 13.5991 13.6689 13.7112 13.4034C13.9075 12.9282 14.2055 12.5265 14.6051 12.1981C15.0047 11.8697 15.506 11.7055 16.1089 11.7055C17.6793 11.7055 18.4645 12.7605 18.4645 14.8707V22.3539H23.1337V14.3257C23.1337 12.2575 22.643 10.6889 21.6614 9.61982C20.6799 8.55078 19.383 8.01627 17.7705 8.01627C15.9617 8.01627 14.5525 8.79184 13.543 10.343V10.3849H13.5219L13.543 10.343V8.35165H8.87381C8.90184 8.79882 8.91587 10.1893 8.91587 12.523C8.91587 14.8567 8.90184 18.1337 8.87381 22.3539Z" fill="white"/>
</svg></span>
<span><svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
<path d="M13.9805 17.8224L9.06316 17.7305C7.47101 17.6984 5.87491 17.7624 4.31399 17.4306C1.93946 16.9349 1.77124 14.5042 1.59522 12.4654C1.35267 9.59908 1.44657 6.68072 1.90428 3.83832C2.16267 2.24343 3.17955 1.29175 4.75213 1.18819C10.0607 0.81235 15.4046 0.85689 20.7014 1.03223C21.2608 1.04831 21.8241 1.13616 22.3757 1.23616C25.0985 1.72391 25.1649 4.47833 25.3414 6.79705C25.5175 9.13968 25.4431 11.4943 25.1067 13.821C24.8368 15.7475 24.3203 17.363 22.1409 17.5189C19.4103 17.7229 16.7423 17.887 14.004 17.8348C14.0041 17.8224 13.9884 17.8224 13.9805 17.8224ZM11.0896 12.9452C13.1474 11.7378 15.1659 10.5505 17.2119 9.35122C15.1503 8.14383 13.1356 6.95656 11.0896 5.75726V12.9452Z" fill="white"/>
</svg></span>
                </div>
                <div className='sub-div'>
                    <h4>Subscribe</h4>
                    <div className='input-div'>
                    <input placeholder='Enter your email Address'></input>
                    <button>Subscribe</button>
                    </div>

                </div>

            </div>
            <div className='footer-card2'>
                <div>
                    <span>Quick Links</span>
                    <p onClick={() => handleLinkClick('/')}>Discovery</p>
                    <p onClick={() => handleLinkClick('/company')}>Company</p>
                    <p onClick={() => handleLinkClick('/guide')}>Guide</p>
                    <p onClick={() => handleLinkClick('/insight')}>Insight</p>
                    
                </div>
                
                {/* <div>
                    <span>Support</span>
                    <p>REC’s Guide</p>
                    <p>Help center</p>
                    <p>REC’s Market place</p>
                    <p>REC’s Registration</p>
                    <p>Chat support</p>
                </div> */}
            </div>
            <div className='footer-card3'>
                <span>Contacts us</span>
                <p onClick={handleEmailClick}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
<path d="M18.3334 2.94946V11.2828C18.3334 11.8353 18.1139 12.3652 17.7232 12.7559C17.3325 13.1466 16.8026 13.3661 16.2501 13.3661H3.75008C3.19755 13.3661 2.66764 13.1466 2.27694 12.7559C1.88624 12.3652 1.66675 11.8353 1.66675 11.2828V2.94946" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.3334 2.94954C18.3334 2.39701 18.1139 1.86711 17.7232 1.47641C17.3325 1.0857 16.8026 0.866211 16.2501 0.866211H3.75008C3.19755 0.866211 2.66764 1.0857 2.27694 1.47641C1.88624 1.86711 1.66675 2.39701 1.66675 2.94954L8.89591 7.46343C9.22702 7.67038 9.60962 7.7801 10.0001 7.7801C10.3905 7.7801 10.7731 7.67038 11.1042 7.46343L18.3334 2.94954Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>    helpdesk@solargaga.com</p>
                <p onClick={handlePhoneClick}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
<path d="M12.2517 17.3851L12.2608 17.3915C13.0478 17.8926 13.9823 18.1102 14.9097 18.0084C15.8372 17.9065 16.7022 17.4913 17.3617 16.8313L17.9346 16.2584C18.0616 16.1315 18.1623 15.9808 18.231 15.815C18.2998 15.6492 18.3351 15.4714 18.3351 15.2919C18.3351 15.1124 18.2998 14.9347 18.231 14.7688C18.1623 14.603 18.0616 14.4524 17.9346 14.3255L15.5181 11.9107C15.3912 11.7838 15.2405 11.683 15.0747 11.6143C14.9089 11.5456 14.7311 11.5102 14.5516 11.5102C14.3721 11.5102 14.1944 11.5456 14.0286 11.6143C13.8627 11.683 13.7121 11.7838 13.5852 11.9107C13.329 12.1669 12.9815 12.3108 12.6192 12.3108C12.2569 12.3108 11.9094 12.1669 11.6532 11.9107L7.78926 8.04586C7.53311 7.78963 7.38922 7.44217 7.38922 7.07987C7.38922 6.71757 7.53311 6.3701 7.78926 6.11388C7.91623 5.987 8.01695 5.83633 8.08566 5.67051C8.15438 5.50468 8.18975 5.32694 8.18975 5.14744C8.18975 4.96794 8.15438 4.79019 8.08566 4.62437C8.01695 4.45854 7.91623 4.30788 7.78926 4.18099L5.3736 1.76625C5.11738 1.51011 4.76991 1.36621 4.40762 1.36621C4.04532 1.36621 3.69785 1.51011 3.44163 1.76625L2.86777 2.33919C2.20792 2.99883 1.79286 3.86385 1.69117 4.79131C1.58948 5.71878 1.80725 6.65318 2.30849 7.44012L2.31396 7.44923C4.96114 11.3658 8.33458 14.7386 12.2517 17.3851V17.3851Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>    (+65) 6291 1033</p>
                <p onClick={handleLocationClick}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none">
<path d="M14.8609 8.65601C14.8609 14.0348 9.35174 17.3486 8.20685 17.9798C8.14342 18.0148 8.07217 18.0331 7.99974 18.0331C7.9273 18.0331 7.85605 18.0148 7.79263 17.9798C6.64688 17.3486 1.1394 14.0348 1.1394 8.65601C1.1394 4.36804 3.71219 1.36646 8.00016 1.36646C12.2881 1.36646 14.8609 4.36804 14.8609 8.65601Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.56982 8.22726C4.56982 9.13705 4.93124 10.0096 5.57456 10.6529C6.21788 11.2962 7.09041 11.6576 8.0002 11.6576C8.91 11.6576 9.78253 11.2962 10.4258 10.6529C11.0692 10.0096 11.4306 9.13705 11.4306 8.22726C11.4306 7.31746 11.0692 6.44493 10.4258 5.80161C9.78253 5.15829 8.91 4.79688 8.0002 4.79688C7.09041 4.79688 6.21788 5.15829 5.57456 5.80161C4.93124 6.44493 4.56982 7.31746 4.56982 8.22726V8.22726Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
</svg>    91 Kitchener Rd,<br/>         #01-02,Singapore 208509</p>
            </div>
        </div>
        <hr/>
        <div className='footer2'>
            <span>Copyright © 2024 SolarGaga</span>
            <span>All Rights Reserved | Terms and Conditions | Privacy Policy</span>
        </div>
    </div>
  )
}
