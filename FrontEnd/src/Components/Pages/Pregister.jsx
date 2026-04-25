const Pregister = () => {
  const errmsg = useSelector((state) => state.Patient.err);
  const messagemodal = useSelector((state) => state.Patient.notification);

  const [show, setshow] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const patient = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      age: data.age,
      gender: data.gender,
      role: "patient",
      location: data.location,
      disease: data.disease,
      flag: true,
    };

    dispatch(Registers(patient));
    setshow(true);
  };

  return (
    <>
      {show && (
        <AlertBox
          notifications={messagemodal}
          onClick={() => setshow(false)}
        />
      )}

      <Layout>
        <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
          <input className="form-control inp" placeholder="Name" {...register("name")} />
          <p className="text-danger">{errors.name?.message}</p>

          <input className="form-control inp" placeholder="Email" {...register("email")} />
          <p className="text-danger">{errors.email?.message}</p>

          <input className="form-control inp" placeholder="Location" {...register("location")} />
          <p className="text-danger">{errors.location?.message}</p>

          <input className="form-control inp" placeholder="Phone" {...register("phone")} />
          <p className="text-danger">{errors.phone?.message}</p>

          <input className="form-control inp" placeholder="Age" {...register("age")} />
          <p className="text-danger">{errors.age?.message}</p>

          <select className="form-control inp" {...register("gender")}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className="text-danger">{errors.gender?.message}</p>

          <input className="form-control inp" placeholder="Disease" {...register("disease")} />

          <input type="password" className="form-control inp" placeholder="Password" {...register("password")} />
          <p className="text-danger">{errors.password?.message}</p>

          <div className="text-center">
            <input className="btn button mt-4" type="submit" />
          </div>
        </form>
      </Layout>
    </>
  );
};