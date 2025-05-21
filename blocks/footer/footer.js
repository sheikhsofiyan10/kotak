import { getMetadata } from "../../scripts/aem.js";
import { loadFragment } from "../fragment/fragment.js";

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */

const footerContent = `
<footer class="footer">
                
                <div><div class="over-lay section">

    <div id="overlay-1605875778332" current-node="overlay_762187938_co" class="modal overlay-currentnode form-success-modal-overlay_762187938_co success-modal fade get-help-popup" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content clearfix pad15">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <div class="white-box clearfix">
                    <div class="sf-popup-div">
                        
                        Disclaimer</div>
                    <div>
                        <div><div class="text section">
<div id="text-f43de23aa7" class="cmp-text">
    <p>The Savings account is offered by Kotak Mahindra Bank Ltd. and the Demat and Trading account by Kotak Securities Ltd. By clicking on ‘Upgrade now’, you are re-directed to Kotak Securities Ltd. page for your convenience. Kotak Bank does not control or endorse Kotak Securities website and is not responsible for the content.</p>
<p class="btn-box popup-close" style="text-align: center;"><a href="https://www.kotaksecurities.com/landing-page/kmbl/generic-zero-intraday-charges-demat-account/?utm_source=Trinity_product_page&amp;utm_campaign=productcard_homepage" class="btn btn-primary" target="_blank">Proceed</a></p>

</div>

    

</div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    


    



</div>
<div class="over-lay section">

    <div id="overlay-1605876787290" current-node="overlay_1787161191_c" class="modal overlay-currentnode form-success-modal-overlay_1787161191_c success-modal fade get-help-popup" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content clearfix pad15">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <div class="white-box clearfix">
                    
                    <div>
                        <div><div class="text section">
<div id="text-20c5bde4d3" class="cmp-text">
    <p><img src="https://www.kotak.com/content/dam/Kotak/product_card_images/activmoney-whatsnew.jpg" width="570"></p>

</div>

    

</div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    


    



</div>
<div class="iparys_inherited"><div class="ifooter_support_par iparsys parsys"></div>
</div><div class="over-lay section">

    <div id="overlay-16058757783321" current-node="Copy of overlay_762187938_co" class="modal overlay-currentnode form-success-modal-Copy of overlay_762187938_co success-modal fade get-help-popup" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content clearfix pad15">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <div class="white-box clearfix">
                    <div class="sf-popup-div">
                        
                        Disclaimer</div>
                    <div>
                        <div><div class="text section">
<div id="text-5642c51a80" class="cmp-text">
    <p>By clicking on the hyperlink, you will be leaving <a href="https://www.kotak.com/en/home.html">www.kotak.com</a> and entering a website operated by other parties.</p>
<p class="btn-box popup-close" style="text-align: center;"><a href="https://kotakbizlabs.accubate.app/ext/form/2802/1/apply" class="btn btn-primary" target="_blank">Proceed</a></p>

</div>

    

</div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    


    



</div>

</div>
                <div>
</div>
                <div class="container">
                    <div class="back-to-top">
                        <a href="javascript:void(0)">Back to Top <i class="icon-more-arow ic-box-top"></i></a>
                    </div>
                </div>
                <div>




<div><div class="secondaryfooter section">
    
        
        
            <div class="sec-footer-container hidden-xs">
				<ul class="container sec-footer-list-box">
					<li class="sec-footer-list-item">
            			<p class="sec-footer-title">Channel Red  *New*</p>
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?sixthFilterTag=mobile-banking">Mobile Banking</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?sixthFilterTag=net-banking">Net Banking</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=manage-your-account">Manage your account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=transfer-money">Transfer money</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=recharge-or-make-payments">Recharge / Make payments</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=credit-cards">Credit Cards</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=credit-cards">Debit Cards</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=home-loan,personal-loan">Loans</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=national-pension-scheme">National Pension Scheme</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=deposits">Deposits</a>
                    		
                		
					</li>
				
					<li class="sec-footer-list-item">
            			<p class="sec-footer-title">Popular Products</p>
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/loans/home-loan.html">Home Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/loans/personal-loan.html">Personal Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/accounts/savings-account.html">Savings Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/business/accounts/current-accounts.html">Current Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/cards/credit-cards.html">Credit Cards</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/investments/mutual-funds.html">Mutual Funds</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/investments/national-pension-system.html">National Pension Scheme (NPS)</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/business/loans/business-loan.html">Business Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/811-savingsaccount-ZeroBalanceAccount/811/vkyc-home.action?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=lead_gen">Zero Balance Savings Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/insurance/life-insurance/apply-for-life-insurance.html">Life Insurance</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/deposits/fixed-deposit.html">Fixed Deposit</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/deposits/recurring-deposits.html">Recurring Deposit</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/business/loans/loan-against-property.html">Loan against property</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak811.com/open-zero-balance-savings-account?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=account_open">Kotak811 Savings Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak811.com/current-account/811-business?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=ca_pp">Kotak811 Current Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/loans/car-loan.html">Car Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/loans/gold-loan.html">Gold Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/loans/education-loan.html">Education Loan</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/cards/prepaid-card.html">Prepaid Card</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/accounts/corporate-salary-account.html">Salary Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/investments/sovereign-gold-bond-scheme.html">Sovereign Gold Bond</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/corporate/cash-management-services/digital-collections/bbps.html">BBPS</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/personal-banking/cards/prepaid-card/forex-card.html">Forex Card</a>
                    		
                		
					</li>
				
					<li class="sec-footer-list-item">
            			<p class="sec-footer-title">Help Center</p>
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/bank-account.html">Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/issue-with-transactions.html">Issue with Transactions</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/credit-card.html">Credit Card</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/811-account.html">811 Account</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/bill-payment-and-recharge.html">Fund Transfer, Bill Payment &amp; Recharge</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/loans--hl--pl--bl--lap--wc-.html">Loans</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/cards/fastag.html">FASTag</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/fixed-deposit-and-recurring-deposit.html">Fixed Deposit (FD) and Recurring Deposit (RD)</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/nri-banking.html">NRI Services</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/personal.html">My Profile - Mobile Number, Aadhaar, Email ID &amp; Address</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/cards/forex.html">Forex</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/insurance.html">Insurance (Premium payments, Tax benefit etc )</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/investments.html">Investments (Scheme Issues, Dividend related)</a>
                    		
                		
                    		
                        		<a class="sec-footer-links" href="https://www.kotak.com/en/help-center/working-capital.html">Working Capital</a>
                    		
                		
					</li>
				</ul>
            </div>
        <!--End footer-->
        
		<div class="container visible-xs">
			<div class="row footer-support">
				<div class="clearfix">
					
           				<div class="accordion-trgr-2 clearfix">
                			<i class="down-arow sprite-img"></i>
                			<div class="nav-title">
                    			<div class="clearfix">
                        			<div class="ohidden">
                            			<p class="contactcard-footer-title">Channel Red  *New*</p> 
                        			</div>
                    			</div>
                			</div>
            			</div>
 						<div class="accordion-container-2" style="display: none;">
                			<div class="footer-sitemap">
                    			<ul>
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?sixthFilterTag=mobile-banking">Mobile Banking</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?sixthFilterTag=net-banking">Net Banking</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=manage-your-account">Manage your account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=transfer-money">Transfer money</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?secondFilterTag=recharge-or-make-payments">Recharge / Make payments</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=credit-cards">Credit Cards</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=credit-cards">Debit Cards</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=home-loan,personal-loan">Loans</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=national-pension-scheme">National Pension Scheme</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/stories-in-focus/channel-red/view-all.html?firstFilterTag=deposits">Deposits</a></li>
                    			</ul>
                			</div>
            			</div>
					
           				<div class="accordion-trgr-2 clearfix">
                			<i class="down-arow sprite-img"></i>
                			<div class="nav-title">
                    			<div class="clearfix">
                        			<div class="ohidden">
                            			<p class="contactcard-footer-title">Popular Products</p> 
                        			</div>
                    			</div>
                			</div>
            			</div>
 						<div class="accordion-container-2" style="display: none;">
                			<div class="footer-sitemap">
                    			<ul>
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/loans/home-loan.html">Home Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/loans/personal-loan.html">Personal Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/accounts/savings-account.html">Savings Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/business/accounts/current-accounts.html">Current Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/cards/credit-cards.html">Credit Cards</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/investments/mutual-funds.html">Mutual Funds</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/investments/national-pension-system.html">National Pension Scheme (NPS)</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/business/loans/business-loan.html">Business Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/811-savingsaccount-ZeroBalanceAccount/811/vkyc-home.action?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=lead_gen">Zero Balance Savings Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/insurance/life-insurance/apply-for-life-insurance.html">Life Insurance</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/deposits/fixed-deposit.html">Fixed Deposit</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/deposits/recurring-deposits.html">Recurring Deposit</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/business/loans/loan-against-property.html">Loan against property</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak811.com/open-zero-balance-savings-account?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=account_open">Kotak811 Savings Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak811.com/current-account/811-business?utm_source=kotak_website_secondary_footer&amp;utm_medium=referral&amp;utm_campaign=ca_pp">Kotak811 Current Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/loans/car-loan.html">Car Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/loans/gold-loan.html">Gold Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/loans/education-loan.html">Education Loan</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/cards/prepaid-card.html">Prepaid Card</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/accounts/corporate-salary-account.html">Salary Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/investments/sovereign-gold-bond-scheme.html">Sovereign Gold Bond</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/corporate/cash-management-services/digital-collections/bbps.html">BBPS</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/personal-banking/cards/prepaid-card/forex-card.html">Forex Card</a></li>
                    			</ul>
                			</div>
            			</div>
					
           				<div class="accordion-trgr-2 clearfix">
                			<i class="down-arow sprite-img"></i>
                			<div class="nav-title">
                    			<div class="clearfix">
                        			<div class="ohidden">
                            			<p class="contactcard-footer-title">Help Center</p> 
                        			</div>
                    			</div>
                			</div>
            			</div>
 						<div class="accordion-container-2" style="display: none;">
                			<div class="footer-sitemap">
                    			<ul>
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/bank-account.html">Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/issue-with-transactions.html">Issue with Transactions</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/credit-card.html">Credit Card</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/811-account.html">811 Account</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/bill-payment-and-recharge.html">Fund Transfer, Bill Payment &amp; Recharge</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/loans--hl--pl--bl--lap--wc-.html">Loans</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/cards/fastag.html">FASTag</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/fixed-deposit-and-recurring-deposit.html">Fixed Deposit (FD) and Recurring Deposit (RD)</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/nri-banking.html">NRI Services</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/personal.html">My Profile - Mobile Number, Aadhaar, Email ID &amp; Address</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/cards/forex.html">Forex</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/insurance.html">Insurance (Premium payments, Tax benefit etc )</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/investments.html">Investments (Scheme Issues, Dividend related)</a></li>
                    			
                        			<li><a class="mb-secfooter-link" href="https://www.kotak.com/en/help-center/working-capital.html">Working Capital</a></li>
                    			</ul>
                			</div>
            			</div>
					
        		</div>
    		</div>
		</div>

	 

</div>
<div class="over-lay section">

    <div id="overlay-1666157204119" current-node="overlay" class="modal overlay-currentnode form-success-modal-overlay success-modal fade get-help-popup" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content clearfix pad15">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <div class="white-box clearfix">
                    <div class="sf-popup-div">
                        
                        Disclaimer</div>
                    <div>
                        <div><div class="text section">
<div id="text-a34105cbe8" class="cmp-text">
    <p>By clicking on the hyper-link, you will be leaving <a href="https://www.kotak.com/en.html" target="_self">www.kotak.com</a> and entering our partnered website which will display recurring payment details enabled on your Kotak Bank Credit / Debit Card.</p>
<p class="btn-box popup-close" style="text-align: center;"><a href="https://payments.billdesk.com/MercOnline/kotakemi/kotakEMITermsAndConditions.jsp?type=bank" class="btn btn-primary" target="_blank">Proceed</a></p>

</div>

    

</div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    


    



</div>
<div class="over-lay section">

    <div id="overlay-1666161436445" current-node="overlay_1284261562" class="modal overlay-currentnode form-success-modal-overlay_1284261562 success-modal fade get-help-popup" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content clearfix pad15">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <div class="white-box clearfix">
                    <div class="sf-popup-div">
                        
                        Disclaimer</div>
                    <div>
                        <div><div class="text section">
<div id="text-99c9045a8d" class="cmp-text">
    <p>By clicking on the hyper-link, you will be leaving <a href="https://www.kotak.com/en.html" target="_self">www.kotak.com</a> and entering website operated by other parties. Kotak Mahindra Bank does not control or endorse such websites, and bears no responsibility for them.</p>
<p class="btn-box popup-close" style="text-align: center;"><a href="https://payments.billdesk.com/MercOnline/kotakemi/kotakEMITermsAndConditions.jsp?type=retail" class="btn btn-primary" target="_blank">Proceed</a></p>

</div>

    

</div>

</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    


    



</div>

</div>
<section class="light_gry_bg">
    <div class="container">
        
        <div class="row footer-sitemap hidden-xs">
            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/about-us.html" target="_top">About us</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/about-us/our-business.html" target="_blank">Our Businesses</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/about-us/media.html" target="_top">Media Centre</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/about-us/careers.html" target="_blank">Careers</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/difc.html" target="_top">DIFC Branch</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/gift.html" target="_top">GIFT Branch</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/fsl.html" target="_top">KMFSL</a>
        </li>
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/investor-relations.html" target="_top">Investor Relations</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations.html" target="_top">Overview</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/financial-results.html" target="_top">Financials</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/governance.html" target="_top">Governance</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/investor-information.html" target="_top">Shareholding &amp; Investor Info</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/sustainability.html" target="_top">Sustainability</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/investor-information/disclosures-regulation.html" target="_top">Disclosures Regulation 46 and 62</a>
        </li>
    
</ul>






</div>

</div>
            </div>

            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/customer-service.html" target="_top">Customer Service</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/important-customer-information.html" target="_top">Important Information</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/contact-us/email-us.html" target="_top">Write to us</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/grievance-redressal.html" target="_top">Grievance Redressal</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/srforms/content/forms/af/kapps.html" target="_top">Report Fraud / Raise Dispute</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/important-customer-information/banking-ombudsman.html" target="_top">Banking Ombudsman</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/download-forms.html" target="_top">Download Forms</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/service-request.html" target="_top">Service Requests</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/transaction-services/track-application.html" target="_top">Track Application Status</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/safe-banking.html" target="_top">Tips on Safe Banking</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/doorstep-banking-service.html" target="_top">Doorstep Banking Service</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/depository-services.html" target="_top">Contact Us for Depository Services</a>
        </li>
    
        <li>
            <a href="https://netbanking.kotak.com/knb2/?referer=RDR-DNC" target="_top">Do Not Call Registry</a>
        </li>
    
        <li>
            <a href="javascript:void(0);" target="_top" data-toggle="modal" data-target="#overlay-1739514871360">Sachet Portal </a>
        </li>
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/srforms/content/forms/af/kotakforms/aadhaarupdate.html" target="_top">Aadhaar Services</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/srforms/content/forms/af/kotakforms/aadhaarupdate.html" target="_top">Link your Aadhaar</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/aadhaar-enrollment-center.html" target="_top">Aadhaar Enrollment Center</a>
        </li>
    
</ul>






</div>

</div>
            </div>
            <div class="clearfix visible-xs"></div>
            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/calculators.html" target="_top">Calculators &amp; Tools</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/calculators/personal-loan-emi-calculator.html" target="_top">Personal Loan EMI Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/calculators/car-loan-emi-calculator.html" target="_top">Car Loan EMI Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/loans/home-loan/home-loan-emi-calculator.html" target="_top">Home Loan EMI Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/deposits/fixed-deposit/fixed-deposit-calculator.html" target="_top">Fixed Deposit Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/deposits/recurring-deposits/recurring-deposit-calculator.html" target="_top">Recurring Deposit Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/insurance/life-insurance.html" target="_top">Life Insurance Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/business/loans/business-loan/emi-calculator.html" target="_top">Business Loan EMI Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/grand-savings-account.html" target="_top">Retirement Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/simple-interest-calculator.html" target="_top">Simple Interest Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/compound-interest-calculator.html" target="_top">Compound Interest Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/calculators/goal-planner.html" target="_top">Goal Planner</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/loans/free-credit-score-checker.html" target="_top">Free Credit Score Checker</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/sip-calculator.html" target="_top">Sip Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/mutual-funds-calculator.html" target="_top">Mutual Fund Calculator</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/lumpsum-calculator.html" target="_top">Lump Sum Calculator</a>
        </li>
    
</ul>






</div>

</div>
            </div>
            <div class="clearfix visible-sm"></div>
            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/digital-banking.html" target="_top">Digital Banking</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/digital-banking/ways-to-bank.html" target="_top">Ways to Bank</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/digital-banking/insta-services.html" target="_top">Insta Services</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/digital-banking/business-solutions.html" target="_top">Business &amp; Fintech</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/open-banking.html" target="_top">Open Banking</a>
        </li>
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a class="disable-event" target="_top">Self Help</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/help-center.html" target="_top">Help Center</a>
        </li>
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a class="disable-event" target="_top">Trending Products</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/cards/credit-cards.html" target="_top">Credit Cards</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/811-zero-balance-digital-savings-account.html" target="_top">811 Digital Savings Bank Account</a>
        </li>
    
</ul>






</div>

</div>
            </div>
            <div class="clearfix visible-xs"></div>
            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a class="disable-event" target="_top">Rates &amp; fees</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/rates/interest-rates.html" target="_top">Interest Rates</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/gsfc.html" target="_top">Fees &amp; Charges (GSFC)</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/important-customer-information/good-services-tax-gst.html" target="_top">Goods &amp; Services Tax (GST)</a>
        </li>
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/personal-banking/financial-inclusions.html" target="_top">Financial Inclusion</a></p></li>
    
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/about-merger.html" target="_top">About Merger</a></p></li>
    
    
</ul>






</div>
<div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a class="disable-event" target="_top">Erstwhile ING Vysya</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/savings-accounts.html" target="_top">Savings Account</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/current-accounts.html" target="_top">Current Account</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/debit-cards.html" target="_top">Debit Card</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/institutional-accounts.html" target="_top">Institutional Accounts</a>
        </li>
    
</ul>






</div>

</div>
            </div>
            <div class="col-md-2 col-sm-4 col-xs-6">
                <div><div class="footer-links section"><ul class="footerSpace">
    <li>
        <p class="footerspace-title"><a class="disable-event" target="_top">Others</a></p></li>
    
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/cards/credit-cards/mitc-and-ca.html" target="_top">Credit Card T&amp;C</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/terms-conditions/co-brand-credit-card.html" target="_top">Co Brand Credit Card</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/personal-banking/cards/debit-cards/mitc.html" target="_top">Debit Card T&amp;C</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/public-notices.html" target="_blank">Public Notice</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/investor-relations/financial-results/regulatory-disclosure.html" target="_top">Regulatory Disclosure</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/important-customer-information/banking-policies.html" target="_top">MSME Policy &amp; Regulatory Updates</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/content/dam/Kotak/others/Certificate-Correspondent-Accounts-KM-Inc.pdf" target="_blank">USA Patriot Act Certification</a>
        </li>
    
        <li>
            <a href="https://www.sihub.in/managesi/kotak/" target="_blank">Subscriptions/ Recurring Payments</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/content/dam/Kotak/others/anti-money-laundering-questionnaire.pdf" target="_blank">Wolfsberg AML Questionnaire</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/bank-auctions.html" target="_top">Auction Cum Sale Notice</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/content/dam/Kotak/others/asset-classification-norms.pdf" target="_top">Asset Classification Norms</a>
        </li>
    
        <li>
            <a href="https://www.kotak.com/en/customer-service/grievance-redressal/recovery-agent.html" target="_top">Recovery Agent</a>
        </li>
    
</ul>






</div>

</div>
            </div>
            <div class="clearfix visible-xs"></div>
        </div>
        <div class="row footer-other">
            <div class="col-md-3 col-sm-3 hidden-xs">
                <p class="footer-other-title">Connect With Us</p>
                <ul class="sosial-icon clearfix">
                    <li><a href="https://www.facebook.com/KotakBank/" target="_blank" rel="nofollow" aria-label="facebook link"><i class="fa-facebook-f fa"></i></a></li>
                
                    <li><a href="https://twitter.com/kotakbankltd?lang=en" target="_blank" rel="nofollow" aria-label="twitter link"><i class="fa-twitter fa"></i></a></li>
                
                    <li><a href="https://www.youtube.com/user/KotakBankIndia" target="_blank" rel="nofollow" aria-label="youtube link"><i class="fa-youtube fa"></i></a></li>
                
                    <li><a href="https://www.linkedin.com/company/kotak-mahindra-bank" target="_blank" rel="nofollow" aria-label="linkedin link"><i class="fa-linkedin fa"></i></a></li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-3">
                <p class="footer-other-title">Install Kotak - 811 &amp; Mobile Banking App</p>

                <ul class="horizon-list-box clearfix">
                    <li>
                        <a href="https://play.google.com/store/apps/details?id=com.msf.kbank.mobile" target="_blank" aria-label="google-playstore link"><img class=" lazyloaded" data-src="https://www.kotak.com/content/dam/Kotak/google-play.png" alt="Google Play" title="Google Play" src="https://www.kotak.com/content/dam/Kotak/google-play.png"></a>
                    </li>
                
                    <li>
                        <a href="https://itunes.apple.com/in/app/kotak-bank/id622363400?mt=8" target="_blank" aria-label="apple-playstore link"><img class=" lazyloaded" data-src="https://www.kotak.com/content/dam/Kotak/apple-store.png" alt="Apple App Store" title="Apple App Store" src="https://www.kotak.com/content/dam/Kotak/apple-store.png"></a>
                    </li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-3 hidden-xs">
                <p class="footer-other-title">&nbsp;</p>
                <ul class="horizon-list-box clearfix">
                    <li>
                        <img class=" lazyloaded" data-src="https://www.kotak.com/content/dam/Kotak/entrust.png" alt="Entrust Secured" title="Entrust Secured" src="https://www.kotak.com/content/dam/Kotak/entrust.png">
                    </li>
                
                    <li>
                        <img class=" lazyloaded" data-src="https://www.kotak.com/content/dam/Kotak/verisign.png" alt="Verisign" title="Verisign" src="https://www.kotak.com/content/dam/Kotak/verisign.png">
                    </li>
                </ul>
            </div>
            <div class="col-md-3 col-sm-3 hidden-xs">
                <p class="footer-other-title">&nbsp;</p>
                <div class="clearfix">
                    <div class="dropup group-site-dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Kotak Group Companies
                            <span class="fa-chevron-down fa"></span>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a href="https://www.kotakmf.com/?utm_source=kotakbanksite&amp;utm_medium=footer" target="_blank">Kotak Asset Management</a></li>
                        
                            <li><a href="https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=www.zurichkotak.com&amp;umid=1A4EA99E-28FD-3A06-ADDE-F58F53C75AF4&amp;auth=1c08f41e13f1471be67f7d94088eca452d160899-09d8c17d76d170d8de41fc6419fe99babccf1f8b" target="_blank">Zurich Kotak General insurance</a></li>
                        
                            <li><a href="https://kie.kotak.com/" target="_blank">Kotak Institutional Equities</a></li>
                        
                            <li><a href="https://www.kotak.com/en/kotak-international-business.html" target="_blank">Kotak International Business</a></li>
                        
                            <li><a href="https://alternateassets.kotak.com" target="_blank">Kotak Investment Advisors</a></li>
                        
                            <li><a href="https://investmentbank.kotak.com" target="_blank">Kotak Investment Banking</a></li>
                        
                            <li><a href="https://www.kotaklife.com/?utm_source=organic&amp;utm_medium=KMBLwebsite&amp;utm_campaign=referral" target="_blank">Kotak Life Insurance</a></li>
                        
                            <li><a href="https://www.kmil.co.in/" target="_blank">Kotak Mahindra Investments</a></li>
                        
                            <li><a href="https://www.primeloans.kotak.com/" target="_blank">Kotak Mahindra Prime</a></li>
                        
                            <li><a href="https://www.kotaksecurities.com/" target="_blank">Kotak Securities Limited</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="row footer-support visible-xs">
            <div class=" footer-other">
                <div class="clearfix">
                    <div class="col-icon">
                        <a href="tel:18602662666" target="_blank"><img class="lazyload" data-src="https://www.kotak.com/content/dam/Kotak/call-icon.png" alt="call-icon" title="call-icon"></a>
                    </div>
                    <ul class="sosial-icon clearfix ohidden">
                        <li><a href="https://www.facebook.com/KotakBank/" target="_blank" rel="nofollow"><i class="fa-facebook-f fa"></i></a></li>
                    
                        <li><a href="https://twitter.com/kotakbankltd?lang=en" target="_blank" rel="nofollow"><i class="fa-twitter fa"></i></a></li>
                    
                        <li><a href="https://www.youtube.com/user/KotakBankIndia" target="_blank" rel="nofollow"><i class="fa-youtube fa"></i></a></li>
                    
                        <li><a href="https://www.linkedin.com/company/kotak-mahindra-bank" target="_blank" rel="nofollow"><i class="fa-linkedin fa"></i></a></li>
                    </ul>
                </div>

            </div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">About us</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/about-us/our-business.html" target="_blank">Our Businesses</a></li>
        
            <li><a href="https://www.kotak.com/en/about-us/media.html" target="_top">Media Centre</a></li>
        
            <li><a href="https://www.kotak.com/en/about-us/careers.html" target="_blank">Careers</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/difc.html" target="_top">DIFC Branch</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/gift.html" target="_top">GIFT Branch</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/fsl.html" target="_top">KMFSL</a></li>
        </ul>
    </div>
</div>

</div>
<div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Investor Relations</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/investor-relations.html" target="_top">Overview</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/financial-results.html" target="_top">Financials</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/governance.html" target="_top">Governance</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/investor-information.html" target="_top">Shareholding &amp; Investor Info</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/sustainability.html" target="_top">Sustainability</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/investor-information/disclosures-regulation.html" target="_top">Disclosures Regulation 46 and 62</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Customer Service</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/customer-service/important-customer-information.html" target="_top">Important Information</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/contact-us/email-us.html" target="_top">Write to us</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/grievance-redressal.html" target="_top">Grievance Redressal</a></li>
        
            <li><a href="https://www.kotak.com/srforms/content/forms/af/kapps.html" target="_top">Report Fraud / Raise Dispute</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/important-customer-information/banking-ombudsman.html" target="_top">Banking Ombudsman</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/download-forms.html" target="_top">Download Forms</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/service-request.html" target="_top">Service Requests</a></li>
        
            <li><a href="https://www.kotak.com/en/transaction-services/track-application.html" target="_top">Track Application Status</a></li>
        
            <li><a href="https://www.kotak.com/en/safe-banking.html" target="_top">Tips on Safe Banking</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/doorstep-banking-service.html" target="_top">Doorstep Banking Service</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/depository-services.html" target="_top">Contact Us for Depository Services</a></li>
        
            <li><a href="https://netbanking.kotak.com/knb2/?referer=RDR-DNC" target="_top">Do Not Call Registry</a></li>
        
            <li><a href="javascript:void(0);" target="_top" data-toggle="modal" data-target="#overlay-1739514871360">Sachet Portal </a></li>
        </ul>
    </div>
</div>

</div>
<div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Aadhaar Services</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/srforms/content/forms/af/kotakforms/aadhaarupdate.html" target="_top">Link your Aadhaar</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/aadhaar-enrollment-center.html" target="_top">Aadhaar Enrollment Center</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Calculators &amp; Tools</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/calculators/personal-loan-emi-calculator.html" target="_top">Personal Loan EMI Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/calculators/car-loan-emi-calculator.html" target="_top">Car Loan EMI Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/loans/home-loan/home-loan-emi-calculator.html" target="_top">Home Loan EMI Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/deposits/fixed-deposit/fixed-deposit-calculator.html" target="_top">Fixed Deposit Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/deposits/recurring-deposits/recurring-deposit-calculator.html" target="_top">Recurring Deposit Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/insurance/life-insurance.html" target="_top">Life Insurance Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/business/loans/business-loan/emi-calculator.html" target="_top">Business Loan EMI Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/grand-savings-account.html" target="_top">Retirement Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/simple-interest-calculator.html" target="_top">Simple Interest Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/compound-interest-calculator.html" target="_top">Compound Interest Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/calculators/goal-planner.html" target="_top">Goal Planner</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/loans/free-credit-score-checker.html" target="_top">Free Credit Score Checker</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/sip-calculator.html" target="_top">Sip Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/mutual-funds-calculator.html" target="_top">Mutual Fund Calculator</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/investments/mutual-funds/lumpsum-calculator.html" target="_top">Lump Sum Calculator</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Digital Banking</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/digital-banking/ways-to-bank.html" target="_top">Ways to Bank</a></li>
        
            <li><a href="https://www.kotak.com/en/digital-banking/insta-services.html" target="_top">Insta Services</a></li>
        
            <li><a href="https://www.kotak.com/en/digital-banking/business-solutions.html" target="_top">Business &amp; Fintech</a></li>
        
            <li><a href="https://www.kotak.com/en/open-banking.html" target="_top">Open Banking</a></li>
        </ul>
    </div>
</div>

</div>
<div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Self Help</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/help-center.html" target="_top">Help Center</a></li>
        </ul>
    </div>
</div>

</div>
<div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Trending Products</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/personal-banking/cards/credit-cards.html" target="_top">Credit Cards</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/accounts/savings-account/811-zero-balance-digital-savings-account.html" target="_top">811 Digital Savings Bank Account</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Rates &amp; fees</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/rates/interest-rates.html" target="_top">Interest Rates</a></li>
        
            <li><a href="https://www.kotak.com/en/gsfc.html" target="_top">Fees &amp; Charges (GSFC)</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/important-customer-information/good-services-tax-gst.html" target="_top">Goods &amp; Services Tax (GST)</a></li>
        </ul>
    </div>
</div>

</div>
<div class="footer-links section">

<div class="accordion-links-2 clearfix">
    <i class="right-arow sprite-img"></i>
    <div class="clearfix">
        <div class="ohidden">
            <p class="contactcard-footer-title "><a href="https://www.kotak.com/en/personal-banking/financial-inclusions.html" target="_top">Financial Inclusion</a></p>
        </div>
    </div>
</div>





</div>
<div class="footer-links section">

<div class="accordion-links-2 clearfix">
    <i class="right-arow sprite-img"></i>
    <div class="clearfix">
        <div class="ohidden">
            <p class="contactcard-footer-title "><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/about-merger.html" target="_top">About Merger</a></p>
        </div>
    </div>
</div>





</div>
<div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Erstwhile ING Vysya</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/savings-accounts.html" target="_top">Savings Account</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/current-accounts.html" target="_top">Current Account</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/debit-cards.html" target="_top">Debit Card</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/erstwhile-ing-vysya/institutional-accounts.html" target="_top">Institutional Accounts</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div><div class="footer-links section">



<div class="accordion-trgr-2 clearfix">
    <i class="down-arow sprite-img"></i>
    <div class="nav-title">
        <div class="clearfix">
            <div class="ohidden">
                <p class="contactcard-footer-title">Others</p>
            </div>
        </div>

    </div>
</div>

<div class="accordion-container-2" style="display: none;">
    <div class="footer-sitemap">
        <ul>
            <li><a href="https://www.kotak.com/en/personal-banking/cards/credit-cards/mitc-and-ca.html" target="_top" aria-label="Credit Card T&amp;C link">Credit Card T&amp;C</a></li>
        
            <li><a href="https://www.kotak.com/en/terms-conditions/co-brand-credit-card.html" target="_top" aria-label="Co Brand Credit Card link">Co Brand Credit Card</a></li>
        
            <li><a href="https://www.kotak.com/en/personal-banking/cards/debit-cards/mitc.html" target="_top" aria-label="Debit Card T&amp;C link">Debit Card T&amp;C</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/public-notices.html" target="_blank" aria-label="Public Notice link">Public Notice</a></li>
        
            <li><a href="https://www.kotak.com/en/investor-relations/financial-results/regulatory-disclosure.html" target="_top" aria-label="Regulatory Disclosure link">Regulatory Disclosure</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/important-customer-information/banking-policies.html" target="_top" aria-label="MSME Policy &amp; Regulatory Updates link">MSME Policy &amp; Regulatory Updates</a></li>
        
            <li><a href="https://www.kotak.com/content/dam/Kotak/others/Certificate-Correspondent-Accounts-KM-Inc.pdf" target="_blank" aria-label="USA Patriot Act Certification link">USA Patriot Act Certification</a></li>
        
            <li><a href="https://www.sihub.in/managesi/kotak/" target="_blank" aria-label="Subscriptions/ Recurring Payments link">Subscriptions/ Recurring Payments</a></li>
        
            <li><a href="https://www.kotak.com/content/dam/Kotak/others/anti-money-laundering-questionnaire.pdf" target="_blank" aria-label="Wolfsberg AML Questionnaire link">Wolfsberg AML Questionnaire</a></li>
        
            <li><a href="https://www.kotak.com/en/bank-auctions.html" target="_top" aria-label="Auction Cum Sale Notice link">Auction Cum Sale Notice</a></li>
        
            <li><a href="https://www.kotak.com/content/dam/Kotak/others/asset-classification-norms.pdf" target="_top" aria-label="Asset Classification Norms link">Asset Classification Norms</a></li>
        
            <li><a href="https://www.kotak.com/en/customer-service/grievance-redressal/recovery-agent.html" target="_top" aria-label="Recovery Agent link">Recovery Agent</a></li>
        </ul>
    </div>
</div>

</div>

</div>

            <div class="accordion-trgr-2 clearfix">
                <i class="down-arow sprite-img"></i>
                <div class="nav-title">
                    <div class="clearfix">
                        <div class="ohidden">
                            <div class="nav-title-div">Kotak Group Companies</div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="accordion-container-2" style="display: none;">
                <div class="footer-sitemap">
                    <ul>
                        <li><a href="https://www.kotakmf.com/?utm_source=kotakbanksite&amp;utm_medium=footer" target="_blank" aria-label="Kotak Asset Management link">Kotak Asset Management</a></li>
                    
                        <li><a href="https://ddei5-0-ctp.trendmicro.com:443/wis/clicktime/v1/query?url=www.zurichkotak.com&amp;umid=1A4EA99E-28FD-3A06-ADDE-F58F53C75AF4&amp;auth=1c08f41e13f1471be67f7d94088eca452d160899-09d8c17d76d170d8de41fc6419fe99babccf1f8b" target="_blank"
                        aria-label="Zurich Kotak General insurance link">Zurich Kotak General insurance</a></li>
                    
                        <li><a href="https://kie.kotak.com/" target="_blank" aria-label="Kotak Institutional Equities link">Kotak Institutional Equities</a></li>
                    
                        <li><a href="https://www.kotak.com/en/kotak-international-business.html" target="_blank" aria-label="Kotak International Business link">Kotak International Business</a></li>
                    
                        <li><a href="https://alternateassets.kotak.com" target="_blank" aria-label="Kotak Investment Advisors link">Kotak Investment Advisors</a></li>
                    
                        <li><a href="https://investmentbank.kotak.com" target="_blank" aria-label="Kotak Investment Banking link">Kotak Investment Banking</a></li>
                    
                        <li><a href="https://www.kotaklife.com/?utm_source=organic&amp;utm_medium=KMBLwebsite&amp;utm_campaign=referral" target="_blank" aria-label="Kotak Life Insurance link">Kotak Life Insurance</a></li>
                    
                        <li><a href="https://www.kmil.co.in/" target="_blank" aria-label="Kotak Mahindra Investments link">Kotak Mahindra Investments</a></li>
                    
                        <li><a href="https://www.primeloans.kotak.com/" target="_blank" aria-label="Kotak Mahindra Prime link">Kotak Mahindra Prime</a></li>
                    
                        <li><a href="https://www.kotaksecurities.com/" target="_blank" aria-label="Kotak Securities Limited link">Kotak Securities Limited</a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    


</section>
<section class="copyright-box">
    <div class="container">
        <span class="copybox-text">Copyright Kotak Mahindra Bank Limited.</span>
        
            | <a href="https://www.kotak.com/en/disclaimer.html" target="_top">Disclaimer</a>
        
            | <a href="https://www.kotak.com/en/privacy-policy.html" target="_top">Privacy Policy</a>
        
            | <a href="https://www.kotak.com/en/terms-conditions.html" target="_top">Terms &amp; Conditions</a>
        
    </div>
</section>
<!--End footer-->






</div>
            </footer>`;
export default async function decorate(block) {
  // load footer as fragment
  // const footerMeta = getMetadata("footer");
  // const footerPath = footerMeta
  //   ? new URL(footerMeta, window.location).pathname
  //   : "/footer";
  // const fragment = await loadFragment(footerPath);

  // // decorate footer DOM
  // block.textContent = "";
  // const footer = document.createElement("div");
  // while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  // block.append(footer);

  block.innerHTML = footerContent;
}
