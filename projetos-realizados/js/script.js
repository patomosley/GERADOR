        // Seletores de Elementos
        const viewProjectsLink = document.getElementById('view-projects');
        const createProjectLink = document.getElementById('create-project');
        const projectsViewSection = document.getElementById('projects-view');
        const projectsCreationSection = document.getElementById('projects-creation');
        const createProjectForm = document.getElementById('create-project-form');
        const projectsTableBody = document.querySelector('#projects-table tbody');
        const exportToExcelButton = document.getElementById('export-to-excel');

        // Dados salvos localmente
        const projects = JSON.parse(localStorage.getItem('projects')) || [];

        // Alternar entre páginas
        function toggleSections(showView) {
            if (showView) {
                projectsViewSection.classList.remove('hidden');
                projectsCreationSection.classList.add('hidden');
                renderProjects();
            } else {
                projectsViewSection.classList.add('hidden');
                projectsCreationSection.classList.remove('hidden');
            }
        }

        viewProjectsLink.addEventListener('click', () => toggleSections(true));
        createProjectLink.addEventListener('click', () => toggleSections(false));

        // Salvar novo projeto
        createProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const newProject = {
                protocol: createProjectForm.protocol.value,
                name: createProjectForm['project-name'].value,
                parentDiagram: createProjectForm['parent-diagram'].value,
                childDiagram: createProjectForm['child-diagram'].value,
                value: parseFloat(createProjectForm.value.value),
                arrivalDate: createProjectForm['arrival-date'].value,
                dueDate: createProjectForm['due-date'].value,
                completionDate: createProjectForm['completion-date'].value,
                status: createProjectForm.status.value,
            };

            projects.push(newProject);
            localStorage.setItem('projects', JSON.stringify(projects));
            alert('Projeto salvo com sucesso!');
            createProjectForm.reset();
        });

        // Renderizar projetos na tabela
        function renderProjects() {
            projectsTableBody.innerHTML = '';
            projects.forEach((project, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${project.protocol}</td>
                    <td>${project.name}</td>
                    <td>${project.parentDiagram}</td>
                    <td>${project.childDiagram}</td>
                    <td>${project.value.toFixed(2)}</td>
                    <td>${project.arrivalDate}</td>
                    <td>${project.dueDate}</td>
                    <td>${project.completionDate || 'N/A'}</td>
                    <td>
                        <select onchange="updateStatus(${index}, this.value)">
                            <option value="PENDENTE" ${project.status === 'PENDENTE' ? 'selected' : ''}>Pendente</option>
                            <option value="ANDAMENTO" ${project.status === 'ANDAMENTO' ? 'selected' : ''}>Andamento</option>
                            <option value="CONCLUIDO" ${project.status === 'CONCLUIDO' ? 'selected' : ''}>Concluído</option>
                        </select>
                    </td>
                    <td>
                        <button onclick="deleteProject(${index})">Excluir</button>
                    </td>
                `;
                projectsTableBody.appendChild(row);
            });
        }

        // Atualizar status do projeto
        function updateStatus(index, newStatus) {
            projects[index].status = newStatus;
            localStorage.setItem('projects', JSON.stringify(projects));
            renderProjects();
        }

        // Excluir projeto
        function deleteProject(index) {
            if (confirm('Tem certeza que deseja excluir este projeto?')) {
                projects.splice(index, 1);
                localStorage.setItem('projects', JSON.stringify(projects));
                renderProjects();
            }
        }

        // Exportar para Excel
        exportToExcelButton.addEventListener('click', () => {
            let csvContent = 'data:text/csv;charset=utf-8,';
            csvContent += 'Protocolo,Nome do Projeto,Diagrama Pai,Diagrama Filho,Valor,Data de Chegada,Data de Vencimento,Data de Conclusão,Status\n';

            projects.forEach((project) => {
                const row = [
                    project.protocol,
                    project.name,
                    project.parentDiagram,
                    project.childDiagram,
                    project.value.toFixed(2),
                    project.arrivalDate,
                    project.dueDate,
                    project.completionDate || 'N/A',
                    project.status,
                ].join(',');
                csvContent += row + '\n';
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement('a');
            link.setAttribute('href', encodedUri);
            link.setAttribute('download', 'projects.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // Inicializar
        toggleSections(true);