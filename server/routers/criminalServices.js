import { fql } from 'fauna'
import client from '../server.js';

// Función para agregar un delincuente
export const addCriminal = async (name, crime, imageUrl) => {
  const query = fql`
    criminals.create({
      name: ${name},
      crime: ${crime},
      imageUrl: ${imageUrl},
      lastSeen: ${new Date().toISOString()},
      dateRegistered: ${new Date().toISOString()}
    })
  `;
  return await client.query(query);
};

// Función para obtener todos los delincuentes
export const getCriminals = async () => {
  const query = fql`
    criminals.all() {
      id,
      name,
      crime,
      imageUrl,
      lastSeen,
      dateRegistered
    }
  `;
  const result = await client.query(query);
  return result.data.data;
};

// Función para borrar un delincuente por ID
export const deleteCriminal = async (id) => {
  const query = fql`
    criminals.byId(${id})!.delete()
  `;
  return await client.query(query);
};