import React from "react";
import PrayerTimingClient from "./PrayerTimingClient";
;import { MouseEvent } from 'react';
const PrayerTiming = async () => {
    const url = ` http://api.aladhan.com/v1/timingsByCity?city=berkane&country=morocco`;

    const response = await fetch(url);
    const data = await response.json();
    let timings = data.data.timings
    



    return (
        <div className="flex flex-col ">
            <div className=" flex  flex-col">
                
                <PrayerTimingClient timings={timings} />


            </div>

            <div className="lg:flex lg:flex-col  sm:flex  sm:flex-wrap w-full">
                <div className="text-center">
                    <h1 className="text-red-600  text-2xl   w-96"> الموقع الرسمي لفضيلة الشيخ أبي عبد المعز محمد علي فركوس حفظه الله</h1>
                    <h3 className=" text-blue-600  text-xl">البيِّنة الجليَّة في شرح حديث تبييت النية</h3>
                </div>
                <div className=" p-10 flex flex-col   w-screen ">
                    <b>الحمد لله ربِّ العالمين، والصلاةُ والسلام على مَنْ أرسله الله رحمةً للعالمين، وعلى آله وصحبِه وإخوانِه إلى يوم الدِّين، أمَّا بعد:</b>
                    <span className='text-blue-600 text-xl' lang="AR-SA" > نصُّ الحديث: </span>
                    <p  ><span lang="AR-SA">عَنْ  حَفْصَةَ </span><span lang="AR-SA">رضي الله عنها</span><span lang="AR-SA"> أَنَّ النَّبِيَّ </span><span lang="AR-SA">صلَّى  الله عليه وسلَّم</span><span lang="AR-SA"> قَالَ: </span><span lang="AR-SA">«</span><b><span lang="AR-SA">مَنْ لَمْ يُبَيِّتِ الصِّيَامَ قَبْلَ الفَجْرِ فَلَا صِيَامَ لَهُ</span></b><span lang="AR-SA">»</span><sup >(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)" >١</a>)</sup><span lang="AR-SA">، وفي روايةٍ: </span><span lang="AR-SA">«</span><b><span lang="AR-SA">مَنْ  لَمْ يُجْمِعِ الصِّيَامَ</span></b><span lang="AR-SA"> <b>قَبْلَ الفَجْرِ فَلَا  صِيَامَ لَهُ</b></span><span lang="AR-SA">»</span><sup >(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)">٢</a>)</sup><span lang="AR-SA">، ولابنِ ماجه والدارَقُطْنِيِّ بلفظِ: </span><span lang="AR-SA">«</span><b><span lang="AR-SA">لَا صِيَامَ لِمَنْ لَمْ يَفْرِضْهُ مِنَ اللَّيْلِ</span></b><span lang="AR-SA">»</span><sup >(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)" >٣</a>)</sup><span lang="AR-SA">.</span></p>
               
                    <span  className='text-blue-600 text-xl' lang="AR-SA">سند الحديث :</span>
                    
                    <p ><span lang="AR-SA">الحديث  رواهُ الخمسة، ورجَّح الترمذيُّ والنَّسائيُّ وَقْفَه، وصحَّحه مرفوعًا ابنُ خزيمة  وابنُ حِبَّان، وقال الحاكم في </span><span lang="AR-SA">«</span><span lang="AR-SA">الأربعين</span><span lang="AR-SA">»</span><span lang="AR-SA">: </span><span lang="AR-SA">«</span><span lang="AR-SA">صحيحٌ على شرط الشيخين</span><span lang="AR-SA">»</span><span lang="AR-SA">، وفي </span><span lang="AR-SA">«</span><span lang="AR-SA">المستدرك</span><span lang="AR-SA">»</span><span lang="AR-SA">: </span><span lang="AR-SA">«</span><span lang="AR-SA">صحيحٌ على شرط البخاريِّ</span><span lang="AR-SA">»</span><sup className="Footnote">(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)" >٤</a>)</sup><span lang="AR-SA">.</span></p>
                    
                    <p ><span lang="AR-SA">هذا،  والحديث ـ&nbsp;مع كونه وَرَد مرفوعًا وموقوفًا&nbsp;ـ فإنَّ ذلك لا يضعِّفه على ما  ذَهَب إليه بعضُ أهل العلم، بل ورودُه كذلك سببٌ مُوجِبٌ للقوَّة باعتبار الطُّرُق  كما أشار إليه ابنُ حزمٍ </span><span lang="AR-SA">ـ&nbsp;رحمه  الله&nbsp;ـ</span><sup >(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)">٥</a>)</sup><span lang="AR-SA">، والحديث أسنده عبد الله بنُ أبي بكر [بنِ عمرو] بنِ حزمٍ كما ذَكَره الخطَّابيُّ  </span><span lang="AR-SA">ـ&nbsp;رحمه الله&nbsp;ـ</span><span lang="AR-SA">. قال النوويُّ </span><span lang="AR-SA">ـ&nbsp;رحمه  الله&nbsp;ـ</span><span lang="AR-SA">: </span><span lang="AR-SA">«</span><span lang="AR-SA">والحديث حسنٌ يُحتجُّ به اعتمادًا على رواية الثِّقات الرافعين،  والزيادةُ مِنَ الثقة مقبولةٌ</span><span lang="AR-SA">»</span><sup className="Footnote">(<a href="https://www.ferkous.com/home/?q=javascript:AppendPopup(this)" >٦</a>)</sup><span lang="AR-SA">.</span></p>
                    <span lang="AR-SA">هذا،  والحديث ـ&nbsp;مع كونه وَرَد مرفوعًا وموقوفًا&nbsp;ـ فإنَّ ذلك لا يضعِّفه على ما  ذَهَب إليه بعضُ أهل العلم، بل ورودُه كذلك سببٌ مُوجِبٌ للقوَّة باعتبار الطُّرُق  كما أشار إليه ابنُ حزمٍ </span>
                
                </div>

            </div>

        </div>
    );
};

export default PrayerTiming;
