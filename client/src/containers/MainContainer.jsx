import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import CreateRecentPerformances from "../screens/CreateRecentPerformances";
import EditRecentPerformances from "../screens/EditRecentPerformances";
import OperaDetail from "../screens/OperaDetail";
import Operas from "../screens/Operas";
import RoleDetail from "../screens/RoleDetail";
import SingerDetail from "../screens/SingerDetail";
import SingerPage from "../screens/SingerPage";
import Singers from "../screens/Singers";
import {
  deleteBlog,
  getAllBlogs,
  getAllUserBlogs,
  postBlog,
  putBlog,
} from "../services/blogs";
import { getAllOperas } from "../services/operas";
import { getAllRoles, getAllRolesInOpera } from "../services/roles";
import { getAllUsers } from "../services/users";

export default function MainContainer(props) {
  const [operas, setOperas] = useState([]);
  const [roles, setRoles] = useState([]);
  const [singers, setSingers] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const history = useHistory();
  const { currentUser } = props;

  useEffect(() => {
    const fetchOperas = async () => {
      const operaArray = await getAllOperas();
      setOperas(operaArray);
    };
    const fetchRoles = async (id) => {
      const roleArray = await getAllRoles();
      setRoles(roleArray);
    };
    const fetchSingers = async () => {
      const singerArray = await getAllUsers();
      setSingers(singerArray);
    };
    const fetchBlogs = async () => {
      const blogArray = await getAllBlogs();
      setBlogs(blogArray);
    };
    fetchOperas();
    fetchRoles();
    fetchSingers();
    fetchBlogs();
  }, []);

  const updateSubmit = async (id, formData) => {
    const updatedBlog = await putBlog(id, formData);
    setBlogs((prevState) =>
      prevState.map((blog) => (blog.id === Number(id) ? updatedBlog : blog))
    );
    history.push("/singer_page/");
  };

  const createSubmit = async (formData) => {
    const newBlog = await postBlog(formData);
    setBlogs((prevState) => [...prevState, newBlog]);
    history.push("/singer_page/");
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    setBlogs((prevState) => prevState.filter((blog) => blog.id !== id));
  };

  // console.log(blogs)

  return (
    <Switch>
      <Route path="/singers/:id">
        <SingerDetail />
      </Route>

      <Route path="/operas/:id">
        <OperaDetail roles={roles} />
      </Route>

      <Route path="/roles/:id">
        <RoleDetail
          roles={roles}
          operas={operas}
          currentUser={currentUser}
          singers={singers}
        />
      </Route>

      <Route path="/operas/">
        <Operas operas={operas} currentUser={currentUser} />
      </Route>

      <Route path="/singers">
        <Singers singers={singers} currentUser={currentUser} />
      </Route>

      <Route path="/singer_page/:id/edit_blog">
        <EditRecentPerformances
          currentUser={currentUser}
          updateSubmit={updateSubmit}
          blogs={blogs}
          handleDelete={handleDelete}
        />
      </Route>

      <Route path="/singer_page/create_blog">
        <CreateRecentPerformances
          currentUser={currentUser}
          createSubmit={createSubmit}
        />
      </Route>

      <Route path="/singer_page/">
        <SingerPage
          currentUser={currentUser}
          // blogs={blogs}
          handleDelete={handleDelete}
        />
      </Route>
    </Switch>
  );
}
