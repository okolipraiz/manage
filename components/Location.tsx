const Location = () => {
    return (
      <>
            <div>
                <h4 className="text-center text-4xl font-bold py-10">
                  Event <span className="text-brightRed">Location</span>
                </h4>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10978.348764052516!2d6.984848354333019!3d5.393079618165021!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425f066c658699%3A0xbc7453a96a27c8f5!2sFederal%20University%20of%20Technology%20-%20Owerri!5e0!3m2!1sen!2sng!4v1691967398717!5m2!1sen!2sng"
            width={'100%'}
            height="450"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </>
    );
}
 
export default Location;