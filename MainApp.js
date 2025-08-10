import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import ParticleBackground from './components/ParticleBackground';
import FoodForm from './components/foodform';
import FoodTable from './components/foodtable';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainApp.css';

function MainApp() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = (newItem) => {
    if (editingItem) {
      setItems((prev) => 
        prev.map(item => 
          item.id === editingItem.id ? { ...newItem, id: editingItem.id } : item
        )
      );
      setEditingItem(null);
    } else {
      setItems((prev) => [...prev, newItem]);
    }
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter(item => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const headerVariants = {
    initial: { opacity: 0, y: -30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <>
      <ParticleBackground />
      <Navigation />
      <motion.div
        className="main-app-container"
        variants={pageVariants}
        initial="initial"
        animate="animate"
      >
        <div className="container-fluid px-4">
        <motion.header 
          className="app-header"
          variants={headerVariants}
        >
          <div className="header-content">
            <motion.h1 
              className="app-title"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              🍽️ Restaurant Management
            </motion.h1>
            <motion.p 
              className="app-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Manage your delicious menu items with style
            </motion.p>
          </div>
        </motion.header>

        <div className="row g-4">
          <motion.div 
            className="col-lg-4 col-md-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="form-section">
              <FoodForm 
                onAdd={handleAdd} 
                editingItem={editingItem}
                onCancelEdit={() => setEditingItem(null)}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="col-lg-8 col-md-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="table-section">
              <FoodTable 
                items={items} 
                onDelete={handleDelete} 
                onEdit={handleEdit}
                editingItem={editingItem}
              />
            </div>
          </motion.div>
        </div>
        </div>
      </motion.div>
    </>
  );
}

export default MainApp;
