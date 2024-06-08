const pool = require('../config/db');

async function saveBmiData(userId, bmiData) {
  const {
    bmi, category, weight, height, age, gender, healthyWeightRange, calory,
  } = bmiData;

  try {
    const result = await pool.query(
      'INSERT INTO bmi (user_id, bmi, category, weight, height, age, gender, healthy_weight_range, calory) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, bmi, category, weight, height, age, gender, healthyWeightRange, calory],
    );

    const [rows] = result;
    return { success: true, insertId: rows.insertId };
  } catch (error) {
    console.error('Error saving BMI data:', error.message); // eslint-disable-line no-console
    return { success: false, message: error.message };
  }
}

async function getAllBmiData() {
  try {
    const result = await pool.query('SELECT * FROM bmi');
    return result[0];
  } catch (error) {
    return { success: false, message: error.message };
  }
}

async function getIdBmiData(id) {
  try {
    const [rows] = await pool.query('SELECT * FROM bmi WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
    // return rows[0];
  } catch (error) {
    console.error('Error fetching BMI data by ID:', error); // eslint-disable-line no-console
    return { success: false, message: error.message };
  }
}

module.exports = { saveBmiData, getAllBmiData, getIdBmiData };
