import logo from './images/Logo.jpg';
import { useState } from 'react';
import './App.css';

function App() {
  const [customerData, setCustomerData] = useState({ 
    registry: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    town: '',
    county: '',
    postcode: '',
    noOfStudents: '',
   });

   const [studentData, setStudentData] = useState({
    studentName1: '',
    studentDOB1: '',
    studentName2: '',
    studentDOB2: '',
    studentName3: '',
    studentDOB3: '',
    studentName4: '',
    studentDOB4: '',
   });


  const [buildData, setBuildData] = useState({
    parentId: "",
    invoiceDate: "",
    startDate: "",
    endDate: "",
    hoursPerWeek: "",
    feesPerWeek: "",
    totalPrice: "",
  });
  const [page, setPage] = useState(0);

  const handleBuild = (e) => {
    const { name, value } = e.target;
    setBuildData({
      ...buildData,
      [name]: value,
    });
  };

  const handleStudent = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleCustomer = (e) => {
    const { name, value } = e.target;
    setCustomerData({
      ...customerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", buildData);
  };

  const handleaddCustomer = (e) => {
    e.preventDefault();
    console.log("Form Data:", customerData, studentData);
  };

  const navClass = `border-white hover:border-blue-800 hover:text-blue-700 border-b-2 transform transition hover:translate-y-1 hover:transform hover:transition duration-500`;
  const labelClass = `block text-xs p-1 text-gray-700 md:text-lg font-semibold text-left md:p-2`;
  const inputClass = `mt-1 text-xs md:text-lg block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 pl-1`;

  const renderStudent = () => {
    const inputs = [];

  for (let i = 1; i <= customerData.noOfStudents; i++) {
    inputs.push(
      <div key={i} className='border-2 border-blue-800 rounded-md p-2 md:p-4'>
        <div className='twoItems mx-auto my-auto'>
          <label htmlFor={`studentName${i}`} className={labelClass}>Student Name</label>
          <input
            type="text"
            id={`studentName${i}`}
            name={`studentName${i}`}
            value={studentData[`studentName${i}`] || ''}
            onChange={handleStudent}
            className={inputClass}
            required
          />
        </div>
        <div className='twoItems mx-auto my-auto'>
          <label htmlFor={`studentDOB${i}`} className={labelClass}>Student DOB</label>
          <input
            type="date"
            id={`studentDOB${i}`}
            name={`studentDOB${i}`}
            value={studentData[`studentDOB${i}`] || ''}
            onChange={handleStudent}
            className={inputClass}
            required
          />
        </div>
      </div>
    );
  }

  return inputs;
  }

  return (
    <div className="App">

      <header className="flex bg-white border-b-2 border-blue-800 md:p-4">
        <img src={logo} alt="logo" className="w-auto h-[15vw] md:h-[100px]" />
        <nav className="flex items-center justify-end w-full p-2 space-x-2 text-sm font-semibold md:text-2xl md:space-x-4 md:p-4">
          <button onClick={() => setPage(0)} className={`${navClass} ${page === 0 ? 'text-blue-600' : 'text-blue-900'}`}>Build Invoice</button>
          <button onClick={() => setPage(1)} className={`${navClass} ${page === 1 ? 'text-blue-600' : 'text-blue-900'}`}>Add Customer</button>
        </nav>
      </header>
      
      <main className='bg-white grid grid-cols-[1fr_18fr_1fr] md:grid-cols-[1fr_1fr_1fr]'>
        <div className='bg-gradient-to-b from-blue-900 to-white h-[2vh] w-full col-span-3'></div>
        <div className='transform transition duration-500 w-[90vw] md:w-[760px] p-3 md:p-6 main-content mx-auto'>
          {page === 0 && (
            <div>
              <h1 className="text-3xl font-bold text-center">Build Invoice</h1>
              <p className='text-center pb-3 md:pb-6'>Create and manage invoices here.</p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="parentId" className={labelClass}>Parent ID</label>
                  <input type="text" id="parentId" name="parentId" value={buildData.parentId} onChange={handleBuild} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="invoiceDate" className={labelClass}>Invoice Date</label>
                  <input type="date" id="invoiceDate" name="invoiceDate" value={buildData.invoiceDate} onChange={handleBuild} className={inputClass} required />
                </div>
                <div className='fiveItems mx-auto my-auto'>
                  <label htmlFor="startDate" className={labelClass}>Start Date</label>
                  <input type="date" id="startDate" name="startDate" value={buildData.startDate} onChange={handleBuild} className={inputClass} required />
                  <p className={`${labelClass} text-center`}> to </p>
                  <label htmlFor="endDate" className={labelClass}>End Date</label>
                  <input type="date" id="endDate" name="endDate" value={buildData.endDate} onChange={handleBuild} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="hoursPerWeek" className={labelClass}>Hours/Week</label>
                  <input type="number" id="hoursPerWeek" name="hoursPerWeek" value={buildData.hoursPerWeek} onChange={handleBuild} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="feesPerWeek" className={labelClass}>Fees/Week</label>
                  <input type="number" id="feesPerWeek" name="feesPerWeek" value={buildData.feesPerWeek} onChange={handleBuild} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="totalPrice" className={labelClass}>Total Price</label>
                  <input type="number" id="totalPrice" name="totalPrice" value={buildData.totalPrice} onChange={handleBuild} className={inputClass} required />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 block mx-auto">Build Invoice</button>
              </form>
            </div>
          )}
          {page === 1 && (
            <div>
              <h1 className="text-3xl font-bold text-center">Add Customer</h1>
              <p className='text-center pb-3 md:pb-6'>Enter new customer details here.</p>
              <form onSubmit={handleaddCustomer} className="space-y-6">
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="registry" className={labelClass}>Registry</label>
                  <select id="registry" name="registry" value={customerData.registry} onChange={handleCustomer} className={inputClass} required>
                    <option value="EY557846 " className={inputClass}>EY557846</option>
                    <option value="2649415" className={inputClass}>2649415</option>
                  </select>
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="title" className={labelClass}>Title</label>
                  <input type="text" id="title" name="title" value={customerData.title} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="firstName" className={labelClass}>First Name</label>
                  <input type="text" id="firstName" name="firstName" value={customerData.firstName} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="lastName" className={labelClass}>Last Name</label>
                  <input type="text" id="lastName" name="lastName" value={customerData.lastName} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="address" className={labelClass}>Address</label>
                  <input type="text" id="address" name="address" value={customerData.address} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="town" className={labelClass}>Town</label>
                  <input type="text" id="town" name="town" value={customerData.town} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="county" className={labelClass}>County</label>
                  <input type="text" id="county" name="county" value={customerData.county} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="postcode" className={labelClass}>Postcode</label>
                  <input type="text" id="postcode" name="postcode" value={customerData.postcode} onChange={handleCustomer} className={inputClass} required />
                </div>
                <div className='twoItems mx-auto my-auto'>
                  <label htmlFor="noOfStudents" className={labelClass}>No of Students</label>
                  <select id="noOfStudents" name="noOfStudents" value={customerData.noOfStudents} onChange={handleCustomer} className={inputClass} required>
                    <option value="1" className={inputClass}>1</option>
                    <option value="2" className={inputClass}>2</option>
                    <option value="3" className={inputClass}>3</option>
                    <option value="4" className={inputClass}>4</option>
                  </select>
                </div>
                {renderStudent()}
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-700 block mx-auto">Add Customer</button>
              </form>
            </div>
          )}
        </div>
        
      </main>
        
      <footer>

      </footer>
    </div>
  );
}

export default App;
