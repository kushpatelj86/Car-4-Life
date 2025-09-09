export function CarAddForm({ car_values, handleValsChange, handleCarSubmit }) {
  return (
    <form onSubmit={handleCarSubmit} id="car-add-form">



      <label htmlFor="user-id">User Id:</label>
      <input
        type="number"
        id="user-id"
        name="user-id"
        value={user_values.user-id}
        onChange={handleValsChange}
        required
      />


      <label htmlFor="make">Make:</label>
      <input
        type="text"
        id="make"
        name="make"
        value={user_values.make}
        onChange={handleValsChange}
        required
      />

      <label htmlFor="model">Model:</label>
      <input
        type="text"
        id="model"
        name="model"
        value={user_values.model}
        onChange={handleValsChange}
        required
      />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        value={user_values.year}
        onChange={handleValsChange}
        required
      />

      <label htmlFor="vin">VIN:</label>
      <input
        type="text"
        id="vin"
        name="vin"
        value={user_values.vin}
        onChange={handleValsChange}
        required
      />

      <label htmlFor="mileage">Mileage:</label>
      <input
        type="number"
        id="mileage"
        name="mileage"
        value={user_values.mileage}
        onChange={handleValsChange}
      />

      <label htmlFor="fuel">Fuel Type:</label>
      <select
        id="fuel"
        name="fuel_type"
        value={user_values.fuel_type}
        onChange={handleValsChange}
        required
      >
        <option value="">Select Fuel</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <button type="submit">Add Car</button>
    </form>
  );
}
