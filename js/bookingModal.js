function bookNow(text){
            var type = text.replace("Book Now","").trim().split(" ")[0];
            var datePicker = `<div class='test'><div class='form-group row'><label class='col-sm-3 control-label date-label'>Select Booking Date</label><div class='col-sm-9'><div class='input-group date' id='datetimepicker9'><input type='text' id='bookingDate' data-bookingType="`+type+`" class='form-control' /><span class='input-group-addon'><span class='glyphicon glyphicon-calendar'></span></span></div></div><p class='help-block text-danger'></p></div><div class='row'><button class='btn btn-default date-next-button' id='bookingNextButton'>Next</button></div></div>`;
            // var nextButton = ""
            $(".booking-panels").slideUp(200,function(){
                $(this).html(datePicker);
                $(".booking-panels").slideDown(200);
                 $(function () {
                    $('#datetimepicker9').datetimepicker({
                        viewMode: 'years',
                        minDate : moment().format(),
                        format : 'YYYY/MM/DD'
                    });
                });
                
                
                
                $("#bookingNextButton").click(function(){
                     $(".booking-panels").slideUp(200,function(){
                        var form = `<div class="test"><form name="bookForm" id="bookForm" class="form-horizontal" novalidate><div class="row control-group"><div class="form-group"><label class="col-sm-3 control-label">Name</label><div class="col-sm-9"><input type="text" class="form-control" id="bookNowName" placeholder="Full Name" required data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div></div></div><div class="row control-group"><div class="form-group"><label class="col-sm-3 control-label">Email Address</label><div class="col-sm-9"><input type="email" class="form-control" placeholder="Email Address" id="bookNowEmail" required data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div></div></div><div class="row control-group"><div class="form-group"><label class="col-sm-3 control-label">Subject</label><div class="col-sm-9"><input type="text" class="form-control" placeholder="Subject" id="bookNowSub"><p class="help-block text-danger"></p></div></div></div><div class="row control-group"><div class="form-group"><label class="col-sm-3 control-label">Message</label><div class="col-sm-9"><textarea rows="5" class="form-control" placeholder="Message" id="bookNowMessage" required data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div></div><br><div id="bookNowSuccess"></div><div class="row"><div class="form-group text-center col-xs-12"><button type="button" class="btn btn-default" data-dismiss="modal"><i class="fa fa-times"></i> Close</button><button type="submit" class="btn btn-success" id="btnSubmitBookNow" data-bookingType="`+type+`" data-date="`+$(" #bookingDate ").val()+`"><i class="fa fa-paper-plane"></i> Send</button></div></div></form></div>`;
                        $(this).html(form);
                        $.getScript("js/bookNow.min.js",function(){
                            $(".booking-panels").slideDown(200);    
                        });
                     });
                })
                
            })
        }
        

        $("#showBookingModalButton").click(function(){
            var bookingModal = `<h2>Booking 予約</h2>
            <div class="panel-group booking-panels" id="accordion" role="tablist" aria-multiselectable="true">
            	<div class="panel panel-default">
            		<div class="panel-heading" role="tab" id="headingOne">
            			<h4 class="panel-title">
            			<a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> 個人ポートレート撮影 </a>
            			<button class="btn btn-default pull-right" onclick="bookNow($(this).parent().text())">Book Now</button></h4>
            		</div>
            				<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            					<div class="panel-body"><h4> 個人ポートレート撮影 </h4>
            						<ul>
            							<li>６０分〜９０分</li><li>写真１０枚確約（編集料込み）</li>
            							<li>ご要望に合わせたロケーションでの撮影</li></ul><h4>Self Portrait Session (15,000 JPY / 160+USD)</h4>
            						<ul>
            							<li>60-90 minutes</li><li>10 guaranteed post-processed photos</li>
            							<li>On-location shoot based on client\`s preferred location or photographer\`s suggestion.</li>
            						</ul>
            					</div>
            				</div>
            			</div>
            	<div class="panel panel-default">
            		<div class="panel-heading" role="tab" id="headingTwo">
            			<h4 class="panel-title">
            				<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> ご家族記念撮影 </a>
            				<button class="btn btn-default pull-right" onclick="bookNow($(this).parent().text())">Book Now</button>
            			</h4>
            		</div>
            		<div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            			<div class="panel-body">
            				<h4>家族記念写真</h4>
            					<ul>
            					<li>６０分〜９０分</li>
            					<li>写真２０枚確約（編集料込み）</li>
            					<li>ご要望に合わせたロケーションでの撮影</li>
            				</ul>
            				<h4>Family Portrait Session (25,000 JPY / 220+USD)</h4>
            					<ul>
            					<li>60-90 minutes</li>
            					<li>20 guaranteed post-processed photos</li>
            					<li>On-location shoot based on client\`s preferred location or photographer\`s suggestion.</li>
            					</ul>
            			</div>
            		</div>
            	</div>
            <div class="panel panel-default">
            	<div class="panel-heading" role="tab" id="headingThree">
            		<h4 class="panel-title">
            			<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> ご結婚・ご婚約記念撮影 </a>
            				<button class="btn btn-default pull-right" onclick="bookNow($(this).parent().text())">Book Now</button></h4>
            	</div>
            		<div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            			<div class="panel-body"><h4>ご結婚・ご婚約記念撮影</h4>
            					<ul>
            					<li>５時間</li>
            					<li>写真３０枚確約（編集料込み）</li>
            					<li>ご衣装変更可能ご要望に合わせたロケーションでの撮影</li>
            					</ul>
            					<h4>Wedding & Engagement Session (55,000 JPY / 500USD)</h4>
            					<ul>
            					<li>5 hours</li>
            					<li>30 guaranteed post-processed photos</li>
            					<li>Includes wardrobe change and on-location shoot based on your preferred location or photographer\`s suggestion</li>
            					</ul>
            			</div>
            		</div>
            	</div>
            </div>`;
            // let maintenanceMsg = "<h2>Section Under Construction</h2>";
            $(".booking-modal").html(bookingModal);
        })
        