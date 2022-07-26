import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [results, setResults] = useState([]);

  // useEffect(async()=>{

  //   let config = {
  //     method:'GET',
  //     url:'https://shy-thunder-32704.botics.co/modules/privacy-policy/',
  //     headers: {
  //       "content-type":"application/json",
  //     }
  //   }

  //   try {
  //     let response = await axios(config)
  //     setResults(response.data.results)

  //   } catch (error) {
  //     console.log(error)

  //   }

  // },[])

  return (
    <div className="App">
      <p style={{ fontSize: "30px", fontWeight: "600", textAlign: "center" }}>
        Come Clean Calculator Privacy Policy
      </p>
      {/* {
        results.length > 0 && results.map((result,index)=>{
          return(
            <p style={{textAlign:'center'}}>{result.body}</p>
          )
        }) ||
        results.length <= 0 && null
      } */}
      <div
        style={{
          width: "90vw",
          alignSelf: "center",
          textAlign: "left",
          fontSize: "22px",
        }}
      >
        <p>Last Updated: April 30,2019</p>
        <p>
          Our Commitment to Privacy. We, Come Clean Calculator LLC, being the
          owner and operator of the Come Clean website and mobile application
          (collectively, the “Services”), respect the privacy of your
          information. We provide this explanation about our online information
          practices as a show of our commitment to protect your privacy. We do
          not sell or rent personally-identifying information collected during
          your use of the Services without your permission
        </p>
        <p>
          In accordance with this Privacy Policy or otherwise upon notification
          to you at the time of data collection or transfer, we may share your
          personally-identifying information with a third party. If you do not
          want your information shared in accordance with this Privacy Policy,
          do not use the Services
        </p>
        <p>
          The Information We Collect, At the time you register on the Services
          or otherwise provide information to us through the Services, we may
          collect and store personally-identifying information. The information
          we collect is categorized as follows:
        </p>
        <p style={{ fontStyle: "italic" }}>
          Service Information — information that you provide to us through the
          Services and through other means. Examples may include your name,
          email address, geo location, and IP address
        </p>
        <p style={{ fontStyle: "italic" }}>
          Transaction and Experience Information — information about your
          transactions with us, as well as information about your conversations
          with us and other communications between you and us. Examples include
          your account history, text communications, requests for information,
          and our responses
        </p>
        <p>
          We need this information to provide services that you request via the
          Services and to let you know of additional services about which you
          might be interested. We also use this information to customize your
          experience using the Services
        </p>
        <p>
          We may also share the information we collect about you with third
          parties, but only to the extent authorized by you, necessary to
          provide the services you request, or as required by law, including,
          for example, Google and Apple in connection with the delivery of the
          services provided by the Services.If you opt-in to receive information
          regarding a promotion or other service offered by a third party, you
          give us your permission to share your name, email address, and other
          information with the third party offering the promotion or other
          service.
        </p>
        <p>
          In addition, we automatically gather general statistical information
          about the Services and visitors, such as IP addresses, browsers, pages
          viewed, number of visitors, services obtained, etc., but in doing so
          we do not reference you by individual name, email address, home
          address, or telephone number. We use this data in the aggregate to
          determine how much our users use parts of the Services so we can
          improve the Services. We may provide this statistical information to
          third parties, but when we do so we do not provide
          personally-identifying information without your permission.
        </p>
        <p>
          As part of our service, we use cookies and beacons to store and
          sometimes track information about you. Some features of the Services
          may be available only through the use of a cookie. A cookie is a small
          amount of data that is sent to your browser from a Web server and
          stored on your device’s memory. A beacon is a transparent graphic
          image placed on the Services to monitor the behavior of a visitor to
          the Services. Generally, we use cookies to remind us who you are and
          enable us to access your account information so you do not have to
          re-enter it. We use cookies and beacons to gather statistical
          information about usage by registered or unregistered users to
          research visiting patterns and track progress and participation in
          promotions and other services. Preference and options configurations
          in your browser determine if and how a cookie or beacon will be
          accepted. You can change those configurations on your device if you
          desire. By changing your preferences, you can accept all cookies, you
          can be notified when a cookie is sent, or you can reject all cookies.
          If you do so and cookies are disabled, you may be required to re-enter
          your information more often and certain features of the Services may
          be unavailable. Disabling cookies will also prevent beacons from
          tracking your unique information when using the Services
        </p>
        <p>
          In addition, third parties linked to the Services may use their own
          cookies and beacons and may collect personally-identifiable
          information, including credit card information, in connection with
          your use of their websites. The privacy policy of such third parties
          may differ from ours. We encourage you to read the third party’s
          privacy policy before responding to the offer to determine how the
          personally-identifiable information is used by that third party
        </p>
        <p>
          The Services do not engage in the collection of personally
          identifiable information from users across third-party websites or
          third-party online services or applications, except as specified by
          you when you elect to register and login to the Services, via certain
          third-party sites or applications, such as, for example, Google Play,
          Apple Services store, Facebook, Twitter, or Instagram. Aside from the
          foregoing, we do not knowingly enable other parties to collect
          personally identifiable information about our users' activities over
          time and across different sites, applications, or services. If your
          browser or similar mechanism gives the Services a “do not track”
          signal, the Services will make commercially reasonable attempts to
          honor your settings (although we still may deliver and use cookies and
          other tracking technologies for non-marketing purposes). However, we
          do not make any promises or guarantees about the effects of any “do
          not track” choice that you may make because:
        </p>
        <p style={{ fontWeight: 600 }}>
          (a) such nuanced treatment is not necessarily available or effective
          for all browsers, mechanisms, or tracking technologies, and our
          commercially reasonable attempts to honor your settings or might not
          be effective to preclude tracking or behavioral advertising at all or
          over any particular period of time
        </p>
        <p style={{ fontWeight: 600 }}>
          (b) third parties may not honor your settings or our policies and may
          use cookies or other tracking technologies for behavioral advertising
          despite our commercially reasonable attempts to prevent them from
          doing so
        </p>
        <p style={{ fontWeight: 600 }}>
          (c) tracking technologies, browsers, and access devices may change
          from time to time and our commercially reasonable attempts might not
          be effective for each technology or across all platforms.
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>
          The Way We Use Information :
        </p>
        <p>
          We use your personally-identifying information to improve our
          marketing and promotional efforts, to statistically analyze site
          usage, to improve our content and product offerings, and to customize
          the content, layout, and services of the Services
        </p>
        <p>
          We may use your information to deliver information to you that, in
          some cases, is targeted to your interests, such as articles, targeted
          banners, new services, advertisements, and promotions. You can opt out
          of receiving this information by so indicating in your
          registration/preferences file or otherwise notifying us in writing. We
          may ask you to provide us voluntarily with additional information
          regarding your personal or business interests, experience, or
          requests, which we may use to customize our services for you.
        </p>
        <p>
          We may use your email address, your mailing address, and phone number
          to contact you regarding administrative notices and communications
          relevant to your use of the Services, We may also use or disclose
          information to resolve disputes or investigate problems. At times, we
          may review the status or activity of multiple users to do so. We may
          disclose or access information whenever we believe in good faith that
          the law so requires or if we otherwise consider it necessary to do so
          to maintain service and improve our services.\r\nWe use your IP
          address to help diagnose problems with our server, to manage the
          Services, and to enhance the Services based on the usage pattern data
          we receive
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>Security</p>
        <p>
          We employ reasonable and current security methods to prevent
          unauthorized access, maintain data accuracy, and ensure correct use of
          information.
        </p>
        <p>
          To use some of our services, you may be required to set up a
          password-protected account or profile on the Services. We recommend
          that you do not divulge your password to anyone. It is your
          responsibility to keep your password protected. Our personnel will
          never ask you for your password in an unsolicited phone call or in an
          unsolicited email. Remember to sign out of your account when you have
          finished your session. This helps ensure that others cannot access
          your personal information and correspondence if you share a device
          with someone else or are using a device in a public place where others
          may have access to it
        </p>
        <p>
          Whenever you voluntarily disclose personal information online -- for
          example, on message boards or blogs, through email, or in chat areas
          -- that information can be collected and used by others.\r\nNo data
          transmission over the Internet or any wireless network can be
          guaranteed to be perfectly secure. As a result, while we try to
          protect your personal information, we cannot ensure or guarantee the
          security of any information you transmit to us, and you do so at your
          own risk
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>International Users</p>
        <p>
          We maintain information in the United States of America and in
          accordance with the laws of the United States, which may not provide
          the same level of protection as the laws in your jurisdiction. By
          using the Services and providing us with information, you understand
          and agree that your information may be transferred to and stored on
          servers located outside your resident jurisdiction and, to the extent
          you are a resident of a country other than the United States, that you
          consent to the transfer of such data to the United States for
          processing by us in accordance with this Privacy Policy
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>
          European Union GDPR Rights
        </p>
        <p>
          In this Section 6, we have summarized certain rights that you may have
          under the European Union General Data Protection Regulation 2016/679
          (“GDPR”) if you are a data subject covered by the GDPR. Some aspects
          of GDPR are complex and not all of the details have been provided
          below. Therefore, you should read the GDPR and relevant guidance from
          the applicable regulatory authorities for a full explanation of these
          rights. Your principal rights under GDPR are:
        </p>
        <p style={{ fontWeight: 600 }}>(a) the right to access</p>
        <p style={{ fontWeight: 600 }}>(b) the right to rectification</p>
        <p style={{ fontWeight: 600 }}>(c) the right to erasure</p>
        <p style={{ fontWeight: 600 }}>(d) the right to restrict processing</p>
        <p style={{ fontWeight: 600 }}>(e) the right to object to processing</p>
        <p style={{ fontWeight: 600 }}>(f) the right to data portability</p>
        <p style={{ fontWeight: 600 }}>
          (g) the right to complain to a supervisory authority
        </p>
        <p style={{ fontWeight: 600 }}>(h) the right to withdraw consent</p>
        <p>
          You have the right to confirmation as to whether or not we process
          your personal data and, where we do, access to the personal data,
          together with certain additional information. That additional
          information includes details of the purposes of the processing, the
          categories of personal data concerned and the recipients of the
          personal data. Providing the rights and freedoms of others are not
          affected, we will supply to you a copy of your personal data. The
          first copy will be provided free of charge, but additional copies may
          be subject to a reasonable fee.\r\nYou have the right to have any
          inaccurate personal data about you rectified and, taking into account
          the purposes of the processing, to have any incomplete personal data
          about you completed.\r\nIn some circumstances you have the right to
          the erasure of your personal data without undue delay. Those
          circumstances include: the personal data are no longer necessary in
          relation to the purposes for which they were collected or otherwise
          processed; you withdraw consent to consent-based processing; you
          object to the processing under certain rules of GDPR; the processing
          is for direct marketing purposes; and the personal data have been
          unlawfully processed. However, there are exclusions of the right to
          erasure. The general exclusions include where processing is necessary:
          for exercising the right of freedom of expression and information; for
          compliance with a legal obligation; or for the establishment, exercise
          or defense of legal claims
        </p>
        <p>
          In some circumstances you have the right to restrict the processing of
          your personal data. Those circumstances are: you contest the accuracy
          of the personal data; processing is unlawful but you oppose erasure;
          we no longer need the personal data for the purposes of our
          processing, but you require personal data for the establishment,
          exercise, or defense of legal claims; and you have objected to
          processing, pending the verification of that objection. Where
          processing has been restricted on this basis, we may continue to store
          your personal data. However, we will only otherwise process it with
          your consent; for the establishment, exercise, or defense of legal
          claims; for the protection of the rights of another natural or legal
          person or for reasons of important public interest.
        </p>
        <p>
          You have the right to object to our processing of your personal data
          on grounds relating to your particular situation, but only to the
          extent that the legal basis for the processing is that the processing
          is necessary for: the performance of a task carried out in the public
          interest or in the exercise of any official authority vested in us; or
          the purposes of the legitimate interests pursued by us or by a third
          party. If you make such an objection, we will cease to process the
          personal information unless we can demonstrate compelling legitimate
          grounds for the processing which override your interests, rights and
          freedoms, or the processing is for the establishment, exercise, or
          defense of legal claims.
        </p>
        <p>
          You have the right to object to our processing of your personal data
          for direct marketing purposes (including profiling for direct
          marketing purposes). If you make such an objection, we will cease to
          process your personal data for this purpose.
        </p>
        <p>
          You have the right to object to our processing of your personal data
          for scientific or historical research purposes or statistical purposes
          on grounds relating to your particular situation, unless the
          processing is necessary for the performance of a task carried out for
          reasons of public interest. To the extent that the legal basis for our
          processing of your personal data is
        </p>
        <p style={{ fontWeight: 600 }}>(a) Consent</p>
        <p style={{ fontWeight: 600 }}>
          or (b) that the processing is necessary for the performance of a
          contract to which you are party or in order to take steps at your
          request prior to entering into a contract, and such processing is
          carried out by automated means, you have the right to receive your
          personal data from us in a structured, commonly used, and
          machine-readable format. However, this right does not apply where it
          would adversely affect the rights and freedoms of others.
        </p>
        <p>
          If you consider that our processing of your personal information
          infringes data protection laws, you have a legal right to lodge a
          complaint with a supervisory authority responsible for data
          protection. You may do so in the EU member state of your habitual
          residence, your place of work, or the place of the alleged
          infringement
        </p>
        <p>
          To the extent that the legal basis for our processing of your personal
          information is consent, you have the right to withdraw that consent at
          any time. Withdrawal will not affect the lawfulness of processing
          before the withdrawal.
        </p>
        <p>
          You may exercise any of your rights in relation to your personal data
          by written notice to us via any of the contact information described
          in Section 8.
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>
          California Residents – Your California Privacy Rights
        </p>
        <p>
          California Civil Code Section 1798.83 permits California residents to
          request from us certain information regarding the disclosure of
          certain categories of personal information to third parties for their
          direct marketing purposes within the immediately preceding calendar
          year. A company may also comply with the law by disclosing in its
          privacy notice that it provides consumers choice (opt-out or opt-in)
          regarding sharing personal information with third parties for those
          third parties’ direct marketing purposes (as we do), and information
          on how to exercise that choice.\r\nIf you are a California resident
          and you have questions about our practices with respect to sharing
          information with third parties for their direct marketing purposes and
          your ability to exercise choice, please send your request to us via
          the email address or the mailing address set forth in Section 8. You
          must put the statement “Your California Privacy Rights” in the subject
          field of your email or include it in your writing if you choose to
          write to us at the designated mailing address. You must include your
          name, street address, city, state, and zip code. We are not
          responsible for notices that are not labeled or sent properly, or do
          not have complete information
        </p>
        <p>
          How You Can Update, Correct, or Delete Your Information\r\n\r\nYou can
          access the information that we collect online and maintain through
          normal updating methods. To update, correct, or delete this
          information, you can contact us via email at
          comecleancalculatorllc@gmail.com. Your account can be deleted or
          deactivated, but doing so will result in your not being able to access
          certain services. During the normal course of doing business, we will
          continue to share your information among our business units, our
          affiliates, and unaffiliated third parties as necessary in order to
          service your accounts and fill any orders you place with us
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>Children Under 13</p>
        <p>
          We have no way of distinguishing the age of individuals who access the
          Services, and so we carry out the same Privacy Policy for individuals
          of all ages. If a child has provided us with personally-identifying
          information without parental or guardian consent, the parent or
          guardian should contact us to remove the information and opt out of
          promotional opportunities or other applicable services.{" "}
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>
          Changes to Our Policy
        </p>
        <p>
          Any changes to our Privacy Policy will be communicated through the
          Services on its effective date. Information collected before changes
          are made will be secured according to the previous Privacy Policy
        </p>
        <p style={{ fontWeight: 700, fontSize: "28px" }}>Your Consent</p>
        <p>
          By using the Services, you consent to the collection and use of this
          information in the manner described in this Privacy Policy.
        </p>
      </div>
    </div>
  );
}

export default App;
