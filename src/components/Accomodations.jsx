import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Navbar from "./navbar";
import Footer from "./Footer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    padding: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  metadata: {
    marginBottom: 10,
    fontSize: 12,
    color: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: 'darkblue',
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  downloadLink: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    color: 'white',
    borderRadius: 5,
    textAlign: 'center',
    textDecoration: 'none',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

const MyDocument = ({ formData, organizationName }) => (
  <Document title="Accommodation Booking" author={organizationName}>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.metadata}>
          <Text style={styles.metadata}>Date of Creation: {new Date().toLocaleDateString()}</Text>
          <Text style={styles.metadata}>Organization: {organizationName}</Text>
        </View>

        <Text style={styles.title}>Accommodation Booking Details</Text>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{formData.name}</Text>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.text}>{formData.email}</Text>
        <Text style={styles.label}>Check-in Date:</Text>
        <Text style={styles.text}>{formData.checkInDate}</Text>
        <Text style={styles.label}>Check-out Date:</Text>
        <Text style={styles.text}>{formData.checkOutDate}</Text>

        <a href="#" download="accommodation_form.pdf" style={styles.downloadLink}>
          Download PDF
        </a>
      </View>
    </Page>
  </Document>
);

function Accommodations() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Navbar />
      <div className="p-8 flex flex-col gap-6">
        <div>
          <div><h1 className="text-4xl font-bold mb-6">Accommodations</h1></div>
          <div>
          Discover a harmonious blend of spirituality and comfort as you plan your pilgrimage to Kedarnath Temple. Ensuring a peaceful and convenient visit, various accommodations are available to cater to the diverse needs of pilgrims. Whether you seek simplicity or a more luxurious experience, Kedarnath provides options that align with your preferences.
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Dharamshalas (Guesthouses):</div>
            <div>For those seeking a humble and economical stay, Dharamshalas around Kedarnath offer basic amenities. These guesthouses are often managed by local trusts or organizations with a focus on providing affordable lodging for pilgrims. Pilgrims can experience the warmth of communal living and share their spiritual journey with fellow devotees.</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Hotels and Resorts:</div>
            <div>Experience comfort amidst the Himalayan landscape by choosing from a range of hotels and resorts. These establishments cater to various budgets and preferences, offering modern amenities such as comfortable beds, hot water facilities, and, in some cases, stunning views of the surrounding mountains. Immerse yourself in the spiritual aura while enjoying a cozy retreat.</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Yatri Niwas:</div>
            <div>Yatri Niwas, dedicated accommodations for pilgrims, are equipped with essential facilities to make your stay hassle-free. These facilities may include clean rooms, attached bathrooms, and dining options. Staying at a Yatri Niwas ensures proximity to the temple premises, allowing you to easily participate in the temple rituals and ceremonies.</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Tented Accommodations:</div>
            <div>For the adventurous souls seeking a unique experience, tented accommodations are available in the vicinity of Kedarnath. Embrace nature and stay in comfortable tents that offer a close connection to the mountains. Wake up to the crisp mountain air and the soothing sounds of nature.</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-xl font-bold'>Booking Information:</div>
            <div>Ensure a seamless pilgrimage by booking your accommodation in advance. Many accommodations accept online reservations, allowing you to secure your stay with ease. Additionally, information on room rates, amenities, and contact details can be found on the respective accommodation websites.

Embark on a spiritual journey to Kedarnath Temple, knowing that a range of accommodations awaits to make your stay memorable. Find solace in the divine surroundings while enjoying the comfort of well-equipped lodgings that cater to the needs of every pilgrim.</div>
          </div>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
          <div className='text-3xl font-bold'>Register for a government accomodation</div>
          <div>
          <form className='flex flex-col gap-1'>
            <label className='flex gap-2 font-bold'>
              Name:
              <input className='border-2 w-1/5' type="text" name="name" value={formData.name} onChange={handleInputChange} />
            </label>
            <br />
            <label className='flex gap-2 font-bold'>
              Email:
              <input className='border-2 w-1/5' type="email" name="email" value={formData.email} onChange={handleInputChange} />
            </label>
            <br />
            <label className='flex gap-2 font-bold'>
              Check-in Date:
              <input className='border-2' type="date" name="checkInDate" value={formData.checkInDate} onChange={handleInputChange} />
            </label>
            <br />
            <label className='flex gap-2 font-bold'>
              Check-out Date:
              <input className='border-2' type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleInputChange} />
            </label>
            <br />
            <PDFDownloadLink
              document={<MyDocument formData={formData} organizationName="Your Organization" />}
              fileName="accommodation_form.pdf"
            >
              {({ blob, url, loading, error }) => (
                <span style={styles.downloadLink}>
                  {loading ? 'Loading document...' : 'Download PDF'}
                </span>
              )}
            </PDFDownloadLink>
          </form>
          </div>
        </div>  
      </div>
      <Footer />
    </>
  );
}

export default Accommodations;
