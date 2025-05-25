# **BookMarker** 📑

**BookMarker** is a simple, user-friendly web app that allows users to save, manage, and organize their favorite website bookmarks. It offers intuitive features for adding, updating, and deleting bookmarks, with input validation and local storage persistence.

---

### **Features** ✨

- **🔖 Add Bookmarks**: Easily save websites by providing a name and URL.
- **✏️ Update Bookmarks**: Modify existing bookmarks with a click.
- **🗑️ Delete Bookmarks**: Remove unwanted bookmarks from your list.
- **🔗 Visit Bookmarks**: Open the saved websites directly in a new tab.
- **✅ Input Validation**: Ensures site names are at least 3 characters and URLs are valid.
- **⚠️ Duplicate Prevention**: Prevents adding the same bookmark name or URL.
- **💾 Persistent Storage**: Bookmarks are saved using **localStorage**, so they persist across browser sessions.
- **📱 Responsive Design**: Fully responsive layout using **Bootstrap** for seamless mobile and desktop experiences.
- **💬 User Feedback**: Alerts for invalid inputs, powered by **SweetAlert2**.

---

### **Built With** 🛠️

- **HTML**: For structure and content.
- **CSS**: Custom styling for a clean, minimal design.
- **Bootstrap**: For responsive layout and UI components.
- **Font Awesome**: For icons in the user interface.
- **SweetAlert2**: For attractive and easy-to-use alert notifications.
- **Google Fonts**: Custom typography with Bree Serif, PT Sans Caption, Pacifico, and Righteous.

---

### **Folder Structure** 📂

```
bookmarker/
├── css/
│ ├── all.min.css # Font Awesome styles
│ ├── bootstrap.min.css # Bootstrap styles
│ ├── style.css # Custom styles for the app
├── img/
│ ├── bookmark.png # Favicon for the app
├── js/
│ ├── bootstrap.bundle.min.js # Bootstrap's JS bundle
│ ├── index.js # Core app logic
├── index.html # Main HTML page
└── README.md # Project documentation
```


---

### **JavaScript Functions** 🖥️

- **Add Bookmark**:  
  When the "Submit" button is clicked, the app validates the input (site name and URL), checks for duplicates, and saves the bookmark to **localStorage**.
  
- **Update Bookmark**:  
  When a bookmark is selected for editing, the app pre-fills the inputs and allows users to update the site name or URL. Changes are saved to **localStorage**.

- **Delete Bookmark**:  
  Users can remove bookmarks by clicking the "Delete" button, which updates the **localStorage**.

- **Input Validation**:  
  The app ensures that the site name has at least 3 characters and that the URL is valid (supports `http://` or `https://`).

- **Prevent Duplicate Entries**:  
  The app checks for existing bookmarks with the same name or URL before allowing a new bookmark to be added.

---

### **Acknowledgments** 🙏

- **Bootstrap** for responsive design and mobile-first development.
- **Font Awesome** for providing a rich set of icons.
- **SweetAlert2** for beautiful and customizable alerts.
- **Google Fonts** for clean and modern typography.

---

### **License** 🔑

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

