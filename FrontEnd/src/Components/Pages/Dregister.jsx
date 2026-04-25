const Dregister = () => {
  const notification = useSelector((state) => state.Doctor.notification);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const doctor = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      age: data.age,
      gender: data.gender,
      role: "doctor",
      location: data.location,
      education: data.education,
      hospital: data.hospital,
      speciality: data.speciality,
      fee: data.fee,
    };

    dispatch(Doctorregister(doctor));
    setShow(true);
  };

  return (
    <Layout>
      {show && (
        <AlertBox notifications={notification} onClick={() => setShow(false)} />
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
        <input className="form-control inp" placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <select className="form-control inp" {...register("gender")}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <p>{errors.gender?.message}</p>

        <input className="form-control inp" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>

        <input className="form-control inp" placeholder="Phone" {...register("phone")} />
        <p>{errors.phone?.message}</p>

        <input className="form-control inp" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="password" className="form-control inp" placeholder="Password" {...register("password")} />
        <p>{errors.password?.message}</p>

        <div className="text-center">
          <input className="btn button" type="submit" />
        </div>
      </form>
    </Layout>
  );
};
export default Dregister;