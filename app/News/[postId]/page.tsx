import React from "react";

interface IProps {
  params: Promise<{ postId: string }>;
}

const page = async ({ params }: IProps) => {
  const { postId } = await params;
  return (
    <div>
      <h1>{postId}</h1>
      <h1 style={{ fontWeight: "bold", color: "red" }}>
        This is how dynamic routing works, you get the params through awaiting a
        Promise in an Async function
      </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At quo nesciunt
        ratione ullam repellendus nisi adipisci iure magni soluta omnis! Facere
        distinctio quasi nobis inventore ipsa tempora consequatur temporibus ab.
        Natus illum quis nemo doloremque assumenda? Assumenda nemo quod, fugiat
        illo quisquam perferendis, doloremque veniam aliquid enim porro ullam
        error expedita magnam a doloribus tenetur unde eaque ipsum repellendus
        accusantium? In quibusdam eaque ullam laboriosam doloremque suscipit
        quidem quis quo cupiditate, numquam obcaecati iusto, fugiat sapiente
        placeat error! Totam iste earum ullam provident quam id quidem, fugit
        facere laudantium saepe. Nihil sit quam neque tempora adipisci ullam
        voluptate maxime dolores. Fugiat quo porro asperiores illo iure nam
        cupiditate magnam aspernatur sequi? Quia dolore debitis corrupti
        incidunt cumque perferendis sint illo? Est esse debitis dolor aperiam,
        quae fugit voluptates totam nemo ipsum inventore. Velit quo aliquam ut
        doloribus dolorum odio ducimus ipsa reiciendis, in amet, facilis
        accusantium, eos natus dignissimos voluptas! Numquam possimus pariatur
        voluptatem amet ea ut voluptate accusamus dolorum. Quam iusto ipsam cum
        quas recusandae, sunt necessitatibus inventore accusantium nihil impedit
        sequi culpa soluta nam eveniet assumenda maxime libero. Laudantium,
        veniam accusantium nulla eos quibusdam illum enim alias exercitationem
        aperiam fuga consectetur obcaecati quis temporibus, fugiat molestiae.
        Explicabo quidem optio, deleniti expedita dolorem culpa! Architecto
        aliquid doloremque dolorem fugit. Officiis officia minus sapiente odio,
        fuga temporibus, quisquam tempore ipsam dicta facere libero tempora
        repudiandae doloremque sequi iste magnam saepe aut eum assumenda at
        nesciunt soluta quae quasi? Aliquam, maxime. Pariatur nemo magni
        asperiores esse ducimus nisi porro. Quibusdam magnam omnis delectus
        commodi aut aspernatur quo in nesciunt mollitia voluptas doloribus
        consequatur rem, ducimus, laborum possimus quia repudiandae dignissimos
        aliquam! Adipisci, ex veniam magni fuga quibusdam libero accusamus
        assumenda quod doloremque consectetur necessitatibus consequuntur
        corporis fugit aperiam hic! Repudiandae consequuntur voluptatem iste
        voluptatum tempore ipsum non quis, eos aut qui. Esse ratione molestias
        quis, libero porro consequuntur aperiam labore neque officiis, aliquam
        repudiandae ex itaque asperiores optio eaque necessitatibus fuga nisi
        facere maxime exercitationem aspernatur sequi? Similique vitae soluta
        quis. Quaerat praesentium, quis excepturi adipisci tenetur rerum atque
        error maiores, at ducimus, dicta aperiam necessitatibus cumque? Ipsa
        eveniet exercitationem aliquid totam, quaerat deleniti rerum quas,
        voluptas ipsam repellat blanditiis aut? Numquam vero voluptatibus quae
        ratione praesentium dolor ab dolorem enim perspiciatis cumque placeat
        repellat ullam inventore et doloribus eligendi quaerat, tempore quam.
        Sed beatae nesciunt officia expedita possimus ab molestiae! Eius sunt
        esse aliquid libero quae cum sint, alias, accusantium aperiam illum,
        porro quos est veritatis labore voluptatibus doloremque magnam
        perferendis aspernatur tenetur ipsam officia numquam laboriosam! Itaque,
        sequi fugiat? Eligendi at optio ducimus, fugiat explicabo quia placeat
        eos inventore suscipit eaque perspiciatis fuga soluta! Perferendis, eos,
        quam temporibus, omnis quia dolore illo iusto voluptate optio enim rem
        praesentium odit. Adipisci quae sint nam ullam facere voluptatem magni
        quo. Placeat a consectetur illum, quasi aperiam tempore omnis, inventore
        quo, rerum velit magni. Debitis praesentium eveniet eos molestiae
        mollitia aliquid ab. Quos, necessitatibus! Minima tempora laboriosam
        eligendi accusantium neque unde inventore nihil voluptatem quidem
        dolorum error, nostrum dolor, est, temporibus omnis totam ipsam tempore
        ipsum quo blanditiis obcaecati officia molestiae libero. Eligendi vel ab
        ullam adipisci fuga magni, debitis eum dicta sequi voluptas odit quaerat
        reiciendis aperiam ex minus ipsa in velit id tempore. Omnis rerum rem
        reprehenderit, debitis praesentium minus? Optio et tempora mollitia
        reprehenderit molestiae iste ab facilis id? Non quam eaque pariatur
        provident suscipit error fuga, tempore necessitatibus nostrum facere
        soluta accusamus consequuntur tenetur dolorum culpa quisquam incidunt.
        Iure repellendus aspernatur, vel sunt voluptas est facere obcaecati
        praesentium ratione mollitia repellat nisi quisquam quos architecto, sed
        fugiat quaerat aut assumenda id nulla similique dicta. Ea facere qui
        deserunt.
      </div>
    </div>
  );
};

export default page;
